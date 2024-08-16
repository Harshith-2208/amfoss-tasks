def daimond(n):
    pattern = []
    if(n%2!=0):
        for i in range(int((n+1)/2)):
            spaces= ' '*(n-i-1)
            stars='*'*(2*i+1)
            pattern.append(spaces+stars)
    
        for i in range(int((n-3)/2),-1,-1):
            spaces=' '*(n-i-1)
            stars='*'*(2*i+1)
            pattern.append(spaces+stars)
        return '\n'.join(pattern) 
    else:
        for i in range(int((n+1)/2)):
            spaces= ' '*(n-i-1)
            stars='*'*(2*i+1)
            pattern.append(spaces+stars)
    
        for i in range(int((n-1)/2),-1,-1):
            spaces=' '*(n-i-1)
            stars='*'*(2*i+1)
            pattern.append(spaces+stars)
    return '\n'.join(pattern)
    

inputfile='input.txt'
with open(inputfile,'r') as inputf:
   n = int(inputf.read().strip())
   
daimond_pattern=daimond(n)
   
outputfile='output.txt'
with open(outputfile,'w') as outputf:
    outputf.write(daimond_pattern)
                                                       
    
    
