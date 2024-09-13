#include <iostream>
#include <fstream>
#include <sstream>

int main() {
    std::ifstream inputFile("input.txt");
    std::ofstream outputFile("output.txt");
    
    if (!inputFile.is_open()) {
        std::cerr << "Error opening input file." << std::endl;
        return 1; 
    }
    
    std::stringstream buffer;
    buffer << inputFile.rdbuf(); 
    outputFile << buffer.str();   

    inputFile.close();
    outputFile.close();

    std::cout << "String has been read from input.txt and writen to output.txt." << std::endl;

    return 0; 
}
