#include <iostream>
using namespace std;

int a[50][2];

void pre(int N){
    if(N == -1) return;
    cout << (char)(N + 'A');
    pre(a[N][0]);
    pre(a[N][1]);
}

void inorder(int N){
    if(N == -1) return;
    inorder(a[N][0]);
    cout << (char)(N + 'A');
    inorder(a[N][1]);
}

void post(int N){
    if(N == -1) return;
    post(a[N][0]);
    post(a[N][1]);
    cout << (char)(N + 'A');
}

int main(){
    int count;
    cin >> count;
    
    for(int i = 0; i < count; i++){
        char x, y, z;
        cin >> x >> y >> z;
        x = x - 'A';
        if(y == '.'){
            a[x][0] = -1;
        }else{
            a[x][0] = y - 'A';
        }
        if(z == '.'){
            a[x][1] = -1;
        }else{
            a[x][1] = z - 'A';
        }
    }
    pre(0);
    cout << "\n";
    inorder(0);
    cout << "\n";
    post(0);
    
    return 0;
}
