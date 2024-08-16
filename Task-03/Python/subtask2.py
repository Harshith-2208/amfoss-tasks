inputfile='input.txt'
outputfile='output.txt'
with open(inputfile,'r') as inputf:
    content = inputf.read()
with open(outputfile,'w') as outputf:
    outputf.write(content)
print("content successfully copied from input.txt to output.txt.")
