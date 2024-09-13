input_data = File.read("input.txt")

File.open("output.txt", "w") do |file|
  file.write(input_data)
end

puts "string has been read from input.txt and writen to output.txt."

