#include <bits/stdc++.h>
using namespace std;

int dp[1001];

void solve(){
    dp[1] = 1;
    dp[2] = 2;
    for(int i = 3; i < 1001; i++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;

    solve();
    cout << dp[N];
}