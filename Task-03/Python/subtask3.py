n = int(input("Enter the value n :"))
if(n%2!=0):
    for i in range(int((n+1)/2)):
        print(' '*(n-i-1), end=' ')
        print('*'*(2*i+1))
    
    for i in range(int((n-3)/2),-1,-1):
        print(' '*(n-i-1), end=' ')
        print('*'*(2*i+1))
else:
    for i in range(int((n+1)/2)):
        print(' '*(n-i-1), end=' ')
        print('*'*(2*i+1))
    
    for i in range(int((n-1)/2),-1,-1):
        print(' '*(n-i-1), end=' ')
        print('*'*(2*i+1))
    
