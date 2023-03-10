#include <bits/stdc++.h>
using namespace std;

vector<int> graph[200001];
int color[20001];

void dfs(int node, int c){
    color[node] = c;
    for(int i = 0; i < graph[node].size(); i++){
        int next = graph[node][i];
        if(color[next] == 0){
            dfs(next, 3 - c);
        }
    }
}

void solve(){
    int k;
    cin >> k;
    while(k--){
        int N, M;
        cin >> N >> M;
        for(int i = 1; i <= N; i++){
            graph[i].clear();
            color[i] = 0;
        }
        for(int i = 0; i < M; i++){
            int u, v;
            cin >> u >> v;
            graph[u].push_back(v);
            graph[v].push_back(u);
        }
        for(int i = 1; i <= N; i++){
            if(color[i] == 0){
                dfs(i, 1);
            }
        }
        bool ok = true;
        for(int i = 1; i <= N; i++){
            for(int j = 0; j < graph[i].size(); j++){
                int temp = graph[i][j];
                if(color[i] == color[temp]){
                    ok = false;
                }
            }
        }
        cout << (ok ? "YES" : "NO") << "\n";
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}