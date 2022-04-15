use std::ffi::OsStr;
use std::path::{Path, PathBuf};

const CONTENTS_DIR: &str = "_contents";
const POSTS_DIR: &str = "posts";
pub struct Config {
	pub src_path: PathBuf,
	pub dest_dir: PathBuf,
}

impl Config {
	pub fn new(args: &[String]) -> Result<Config, &'static str> {
		if args.len() < 2 {
			return Err("need at least one args! >> [src_path] [dest_dir]");
		}
		let src_path = Path::new(&args[1]).to_path_buf();
		if !Config::is_json(&src_path) {
			return Err("is not json file!");
		}
		let mut dest_dir = Path::new(CONTENTS_DIR).join(POSTS_DIR);
		if args.len() > 2 {
			dest_dir = Path::new(&args[2]).to_path_buf();
		}
		Ok(Config { src_path, dest_dir })
	}

	fn is_json(src_path: &PathBuf) -> bool {
		let result = src_path.extension().and_then(OsStr::to_str);
		if let Some("json") = result {
			return true;
		}
		false
	}
}

// Test
#[cfg(test)]
mod test {
	use super::*;

	#[test]
	fn case_isnot_json() {
		let filepath = Path::new("file.isnotjson").to_path_buf();
		assert_eq!(Config::is_json(&filepath), false);
	}

	#[test]
	fn case_is_json() {
		let filepath = Path::new("fileis.json").to_path_buf();
		assert_eq!(Config::is_json(&filepath), true);
	}
}
