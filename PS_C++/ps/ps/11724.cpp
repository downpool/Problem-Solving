#include <bits/stdc++.h>
using namespace std;

vector<int> graph[1001];
bool check[1001];

void dfs(int node){
    check[node] = true;
    for(int i = 0; i < graph[node].size(); i++){
        int temp = graph[node][i];
        if(!check[temp]){
            dfs(temp);
        }
    }
}

void solve(){
    int N, M;
    cin >> N >> M;
    memset(check, false, N + 1);
    for(int i = 0; i < M; i++){
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    int count = 0;
    for(int i = 1; i <= N; i++){
        if(!check[i]){
            dfs(i);
            count++;
        }
    }
    cout << count;
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}