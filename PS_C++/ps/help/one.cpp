#include <iostream>

using namespace std;

int main(){
    int n;
    while(1){
        cin >> n;
        if(n < 0){
            break;
        }else{
            if(n % 2 == 0){
                cout << "even" << "\n";
            }else{
                cout << "odd" << "\n";
            }
        }
    }
    
    return 0;
}
