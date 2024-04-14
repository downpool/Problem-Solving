#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

void solve(){
    int n, k, w, v;
    cin >> n >> k;
    int knap[100001] = {0};
    while(n--){
        cin >> w >> v;
        for(int i = k; i >= w; i--){
            knap[i] = max(knap[i], knap[i - w] + v);
        }
    }
    cout << knap[k];
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}