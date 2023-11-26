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

// #include <bits/stdc++.h>
// using namespace std;

// struct Node {
//     int left;
//     int right;
// };

// Node a[100];

// void preorder(int x){
//     if(x == -1) return;
//     cout << (char)(x + 'A');
//     preorder(a[x].left);
//     preorder(a[x].right);
// }

// void inorder(int x){
// if(x == -1) return;
//     inorder(a[x].left);
//     cout << (char)(x + 'A');
//     inorder(a[x].right);
// }

// void lastorder(int x){
//     if(x == -1) return;
//     lastorder(a[x].left);
//     lastorder(a[x].right);
//     cout << (char)(x + 'A');
// }

// void solve(){
//     int n;
//     cin >> n;
//     for(int i = 1; i <= n; i++){
//         char x, y, z;
//         cin >> x >> y >> z;
//         x = x - 'A';
//         if(y == '.'){
//             a[x].left = -1;
//         }else{
//             a[x].left = y - 'A';
//         }
//         if(z == '.'){
//             a[x].right = -1;
//         }else{
//             a[x].right = z - 'A';
//         }
//     }

//     preorder(0);
//     cout << "\n";
//     inorder(0);
//     cout << "\n";
//     lastorder(0);

// }

// int main(){
//     ios::sync_with_stdio(0);
//     cin.tie(0);

//     solve();
// }