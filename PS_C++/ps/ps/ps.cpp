#include <iostream>
#include <vector>

using namespace std;

int main(){
    int T;
    cin >> T;
    
    for(int test = 1; test <= T; test++){
        int temp;
        cin >> temp;
        vector<int> vec1(temp);
        for(int i = 0; i < vec1.size(); i++){
            int tem;
            cin >> tem;
        }
        cout << "#" << test << " " << temp;
    };
    return 0;
}
