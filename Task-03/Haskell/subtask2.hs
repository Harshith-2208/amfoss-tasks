import System.IO

main :: IO ()
main = do
   
    let inputPath = "input.txt"
    let outputPath = "output.txt"

    content <- readFile inputPath

    writeFile outputPath content

    putStrLn "String has been read from input.txt and writen to output.txt."

