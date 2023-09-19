#include <iostream>

using namespace std;

int main() {
    int list[4] = {6,3,2,5};
    int leght = sizeof(list) / sizeof(int);
    int aux = 0;

    for (int i = 0; i < leght; i++) {   
        for (int j = 0; j < leght-i-1; j++) {
            if (list[j] > list[j+1]) {
                aux = list[j];
                list[j] = list[j+1];
                list[j+1] = aux;

            }
        }
    }
    for (int i = 0; i < leght; i++)
    {
        cout << list[i];
    }
    
    
}