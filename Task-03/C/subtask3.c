#include<stdio.h>
int main() {
int n;
printf("Enter an integer:");
scanf("%d",&n);
if(n%2!=0){
for(int i=1;i<=n;i=i+2){
for(int j=i;j<=n;j=j+2)
printf(" ");
for(int k=1;k<=i;k++)
printf("*");
printf("\n");
}
for(int i=n-2;i>0;i=i-2){
for(int j=i;j<=n;j=j+2)
printf(" ");
for(int k=1;k<=i;k++)
printf("*");
printf("\n");
}
}
else{
for(int i=1;i<=n;i=i+2){
for(int j=i;j<=n;j=j+2)
printf(" ");
for(int k=1;k<=i;k++)
printf("*");
printf("\n");
}
for(int i=n;i>0;i=i-2){
for(int j=i;j<=n;j=j+2)
printf(" ");
for(int k=1;k<i;k++)
printf("*");
printf("\n");
}
}
return 0;
}
