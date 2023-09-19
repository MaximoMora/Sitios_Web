#include <iostream>

using namespace std;

int binary(int list[10], int target) {
    int min = list[0];
    int max = list[10];
    int mid = 0;
    int index_min = 0;
    int index_max = 10; 
    while (mid != target) {
        mid = (min + max) / 2;
        cout << mid;
        if (target > mid) {
            min = list[index_min+1];
        }else {
            max = list[index_max-1];
        }
    }
    return mid;
}

int main( ) {
    int lista[10] = {1,2,3,4,5,6,7,8,9};
    int result = binary(lista,2);
    cout << result;
    return 0;
}