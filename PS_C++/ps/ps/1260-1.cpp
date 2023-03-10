#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;
//nodemax = 100
//edgemax = 1000
vector<int> graph[1001];
int a, b, c;
bool visited[1001] = {true};

void dfs(int v){
    visited[v] = true;
    //
    cout << v << " ";
    for(int i : graph[v]){
        if(!visited[i]){
            dfs(i);
        }
    }
}

void bfs(int v){
    visited[v] = true;
    queue<int> q;
    q.push(v);
    while(!q.empty()){
        int node = q.front();
        q.pop();
        //
        cout << node << " ";
        for(int i : graph[node]){
            if(!visited[i]){
                visited[i] = true;
                q.push(i);
            }
        }
    }
}

void solve(){
    cin >> a >> b >> c;
    memset(visited, false, a + 1);
    visited[0] = true;
    for(int i = 1; i <= b; i++){
        int x, y;
        cin >> x >> y;
        graph[x].push_back(y);
        graph[y].push_back(x);
    }
    for(int i = 1; i <= a; i++){
        sort(graph[i].begin(), graph[i].end());
    }
    dfs(c);
    cout << "\n";
    memset(visited, false, a + 1);
    visited[0] = true;
    bfs(c);
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}