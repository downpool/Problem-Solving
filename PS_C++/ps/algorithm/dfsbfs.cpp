#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;
//nodemax = 1000
//edgemax = 1000
vector<int> graph[1001];
bool visited[1001] = {false};
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

void bfs(v){
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
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}