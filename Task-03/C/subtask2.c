#include <stdio.h>
int main()
{ FILE *inputFile, *outputFile;
    char buffer[1000]; 
    inputFile = fopen("input.txt", "r");
    if (inputFile == NULL) {
        printf("Error opening input.txt\n");
        return 1;
    }
    outputFile = fopen("output.txt", "w");
    if (outputFile == NULL) {
        printf("Error opening output.txt\n");
        fclose(inputFile);  
        return 1;
    }
    while (fgets(buffer, sizeof(buffer), inputFile) != NULL) {
        fputs(buffer, outputFile);
    }

    /
    fclose(inputFile);
    fclose(outputFile);

    printf("Content has been successfully copied from input.txt to output.txt\n");

    return 0;
}
