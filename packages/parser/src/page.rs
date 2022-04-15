use serde_derive::{Deserialize, Serialize};
use serde_json::{json, Value};
use std::collections::HashMap;
use std::fs::create_dir_all;
use std::fs::File;
use std::path::PathBuf;

#[derive(Serialize, Deserialize)]
#[allow(non_snake_case)]
pub struct CraftBlogPage {
	pub id: String,
	pub parentId: Value,
	// published_at:
	// updated_at:
	pub rootBlock: Value,
}

pub fn save_pages(
	pages: &mut HashMap<String, CraftBlogPage>,
	dest_dir: &PathBuf,
) -> std::io::Result<()> {
	create_dir_all(dest_dir).ok();
	for (id, craft_blog_page) in pages.iter() {
		let path = dest_dir.join(id.to_owned() + ".json");
		let mut f = File::create(path)?;
		serde_json::to_writer_pretty(&mut f, &craft_blog_page)?;
	}
	Ok(())
}

pub fn get_pages(
	block: &Value,
	pid: &str,
	container: &mut HashMap<String, CraftBlogPage>,
) -> Result<(), &'static str> {
	if is_pageblock(block) {
		let id = block["id"].as_str().unwrap();
		let mut root_block = block.clone();
		dump_subblock_under_grandchild(&mut root_block);

		let page = CraftBlogPage {
			id: id.to_owned(),
			parentId: if pid == "null" {
				Value::Null
			} else {
				Value::String(pid.to_string())
			},
			rootBlock: root_block,
		};
		container.insert(id.to_owned(), page);
		for sub_block in block["subblocks"].as_array().unwrap() {
			get_pages(sub_block, &id, container)?
		}
	}
	Ok(())
}

pub fn is_pageblock(block: &Value) -> bool {
	if block["type"] == "textBlock" && !block["subblocks"].as_array().unwrap().is_empty() {
		return true;
	}
	false
}

pub fn dump_subblock_under_grandchild(block: &mut Value) {
	recursive_subblock_dumper(block, 0);
}

fn recursive_subblock_dumper(block: &mut Value, current_depth: u32) {
	if block["type"] != "textBlock" {
		return;
	}
	let subblocks = block["subblocks"].as_array_mut().unwrap();
	if current_depth == 2 || subblocks.is_empty() {
		block["subblocks"] = json!([]);
		return;
	}

	for subblock in subblocks.iter_mut() {
		recursive_subblock_dumper(subblock, current_depth + 1);
	}
}

////////////////////
/* ✅ Test Module */
////////////////////

#[cfg(test)]
mod test {
	const TEST_DIR: &str = "resources/test/";
	use super::*;
	use std::fs::File;
	use std::io::prelude::*;

	#[test]
	fn to_get_pages() {
		let mut file = File::open(TEST_DIR.to_owned() + "depthTest.json").unwrap();
		let mut contents = String::new();

		file.read_to_string(&mut contents).unwrap();

		let block: Value = serde_json::from_str(&contents).unwrap();

		let mut result = HashMap::<String, CraftBlogPage>::new();
		get_pages(&block, "null", &mut result).unwrap();

		for (key, value) in result.iter() {
			println!("key : {key}, value: {}", value.parentId);
		}
		assert_eq!(2, result.len());
	}

	#[test]
	fn to_get_pages_depth() {
		let mut file = File::open(TEST_DIR.to_owned() + "dumpTest.json").unwrap();
		let mut contents = String::new();

		file.read_to_string(&mut contents).unwrap();

		let block: Value = serde_json::from_str(&contents).unwrap();

		let mut result = HashMap::<String, CraftBlogPage>::new();
		get_pages(&block, "null", &mut result).unwrap();

		for (key, value) in result.iter() {
			println!("key : {key}, parentId: {}", value.parentId);
		}
		assert_eq!(5, result.len());
	}

	#[test]
	fn case_is_pageblock() {
		let mut file = File::open(TEST_DIR.to_owned() + "rootBlock.json").unwrap();
		let mut contents = String::new();

		file.read_to_string(&mut contents).unwrap();

		let block: Value = serde_json::from_str(&contents).unwrap();
		assert_eq!(true, is_pageblock(&block))
	}

	#[test]
	fn case_isnot_pageblock() {
		let mut file = File::open(TEST_DIR.to_owned() + "tailBlock.json").unwrap();
		let mut contents = String::new();

		file.read_to_string(&mut contents).unwrap();

		let block: Value = serde_json::from_str(&contents).unwrap();
		assert_eq!(false, is_pageblock(&block))
	}
}
