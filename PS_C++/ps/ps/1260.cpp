#include <bits/stdc++.h>
using namespace std;

vector<int> graph[1001];
bool check[1001];

void dfs(int node){
    check[node] = true;
    cout << node << " ";
    for(int i = 0; i < graph[node].size(); i++){
        int next = graph[node][i];
        if(!check[next]){
            dfs(next);
        }
    }
}

void bfs(int start){
    queue<int> q;
    memset(check, false, sizeof(check));
    check[start] = true;
    q.push(start);
    while(!q.empty()){
        int node = q.front();
        q.pop();
        cout << node << " ";
        for(int i = 0; i < graph[node].size(); i++){
            int next = graph[node][i];
            if(!check[next]){
                check[next] = true;
                q.push(next);
            }
        }
    }
}

void solve(){
    int n, m, start;
    cin >> n >> m >> start;
    for(int i = 0; i < m; i++){
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    for(int i = 1; i <= n; i++){
        sort(graph[i].begin(), graph[i].end());
    }
    dfs(start);
    cout << "\n";
    bfs(start);
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}