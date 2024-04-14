#include <bits/stdc++.h>
using namespace std;

bool N[1001];

void isPrime(){
    memset(N, true, 1001);
    N[1] = false;
    for(int i = 2; i <= 1000; i++){
        for(int j = 2; j * j <= i; j++){
            if(i % j == 0) {
                N[i] = false;
                break;
            }
        }
    }
}

void solve(){
    isPrime();
    int n, count = 0;
    cin >> n;
    while(n--){
        int k;
        cin >> k;
        if(N[k]) count++;
    }
    cout << count;
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}