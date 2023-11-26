#include <bits/stdc++.h>
using namespace std;

int k;
int dp[13];

void solve(){
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for(int i = 4; i <= 12; i++){
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N;
    solve();
    cin >> N;
    for(int i = 0; i < N; i++){
        cin >> k;
        cout << dp[k] << "\n";
    }
}