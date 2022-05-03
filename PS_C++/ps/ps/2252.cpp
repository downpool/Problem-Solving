#include <bits/stdc++.h>
using namespace std;

vector<int> graph[32001];
bool check[32001];

void dfs(int n){
    check[n] = true;
    for(int i : graph[n]){
        if(check[i] == false){
            dfs(i);
        }
    }
    cout << n << " ";
}

void solve(){
    int n, m;
    cin >> n >> m;
    for(int i = 0; i < m; i++){
        int x, y;
        cin >> x >> y;
        graph[y].push_back(x);
    }
    for(int i = 1; i <= n; i++){
        if(check[i] == false){
            dfs(i);
        }
    }
    cout << "\n";
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}