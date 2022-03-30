pub mod config;
pub mod page;

use config::Config;
use page::{get_pages, save_pages, CraftBlogPage};
use serde_json::Value;
use std::collections::HashMap;
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
	let mut file = File::open(config.src_path)?;
	let mut contents = String::new();

	file.read_to_string(&mut contents)?;

	let root_block: Value = serde_json::from_str(&contents)?;
	let mut pages = HashMap::<String, CraftBlogPage>::new();
	get_pages(&root_block, "null", &mut pages)?;
	save_pages(&mut pages, &config.dest_dir)?;
	Ok(())
}
