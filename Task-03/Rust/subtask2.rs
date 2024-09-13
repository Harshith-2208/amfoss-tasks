use std::fs;
use std::io::Result;

fn main() -> Result<()> {
    
    let input_path = "input.txt";
    let output_path = "output.txt";

    let content = fs::read_to_string(input_path)?;

    fs::write(output_path, content)?;

    println!("String has been read from {} and writen to {}.", input_path, output_path);

    Ok(())
}

