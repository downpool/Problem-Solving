#include <iostream>
#include <math.h>

using namespace std;

int main(){
    
    double logg = log10(2);
    double sum = 0;
    int count = 1;
    while(abs(logg - sum) > 0.0001){
        if(count % 2 != 0){
            sum += 1 / count;
        }else{
            sum -= 1 / count;
        }
      count++;
    }
    cout << logg << "\n";
    cout << sum << "\n";
    cout << count << "\n";
    cout << abs(logg - sum) << "\n";
    
    return 0;
}
