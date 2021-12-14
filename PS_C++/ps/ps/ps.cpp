#include <iostream>

using namespace std;

unsigned long long int arr[101];

unsigned long long int fibo(int n){
    if(n <= 1) return n;
    if(arr[n] != 0) return arr[n];
    
    return arr[n] = fibo(n - 1) + fibo(n - 2);
}

int main(){
    int n;
    arr[1] = 0;
    arr[2] = 1;
    arr[3] = 1;
    cin >> n;
    cout << fibo(n + 1);
    
    return 0;
}
