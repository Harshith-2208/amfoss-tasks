#include<stdio.h>
int main() {
int n;
FILE *file;
    file = fopen("input.txt", "r");
    fscanf(file, "%d", &n);
    fclose(file);
    file = fopen("output.txt", "w");
if(n%2!=0){
for(int i=1;i<=n;i=i+2){
for(int j=i;j<=n;j=j+2)
fprintf(file," ");
for(int k=1;k<=i;k++)
fprintf(file,"*");
fprintf(file,"\n");
}
for(int i=n-2;i>0;i=i-2){
for(int j=i;j<=n;j=j+2)
fprintf(file," ");
for(int k=1;k<=i;k++)
fprintf(file,"*");
fprintf(file,"\n");
}
}
else{
for(int i=1;i<=n;i=i+2){
for(int j=i;j<=n;j=j+2)
fprintf(file," ");
for(int k=1;k<=i;k++)
fprintf(file,"*");
fprintf(file,"\n");
}
for(int i=n;i>0;i=i-2){
for(int j=i;j<=n;j=j+2)
fprintf(file," ");
for(int k=1;k<i;k++)
fprintf(file,"*");
fprintf(file,"\n");
}
}
fclose(file);
printf("Pattern written to output.txt .\n");
return 0;
}
