#include <bits/stdc++.h>
using namespace std;

int dp[1001];

void solve(){
    int n;
    cin >> n;
    dp[1] = 1;
    dp[2] = 3;
    for(int i = 3; i <= n; i++){
        dp[i] = (2 * dp[i - 2] + dp[i - 1]) % 10007;
    }
    cout << dp[n];
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}