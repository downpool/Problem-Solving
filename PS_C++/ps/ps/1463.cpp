#include <bits/stdc++.h>
using namespace std;

#define MIN(x, y) (x < y ? x : y)

int a;
int dp[1000001];

void solve(){
    cin >> a;
    for(int i = 2; i <= a; i++){
        dp[i] = dp[i - 1] + 1;
        if(i % 2 == 0) dp[i] = MIN(dp[i], dp[i / 2] + 1);
        if(i % 3 == 0) dp[i] = MIN(dp[i], dp[i / 3] + 1);
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    solve();
    cout << dp[a];
}