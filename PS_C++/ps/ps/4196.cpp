#include <bits/stdc++.h>
using namespace std;

stack<int> st;
vector<int> adjList[100010];
bool visited[100010];

void dfs2(int index){
    visited[index] = true;
    for(auto j : adjList[index]){
        if(!visited[j]) dfs2(j);
    }
}

void dfs(int index){
    visited[index] = true;
    for(auto j : adjList[index]){
        if(!visited[j]) dfs(j);
    }
    st.push(index);
}

void solve(){
    int tc;
    cin >> tc;
    while(tc--){
        memset(visited, false, sizeof(visited));
        int n, m;
        cin >> n >> m;
        for(int i = 0; i < m; i++){
            int a, b;
            cin >> a >> b;
            adjList[a].push_back(b);
        }

        for(int i = 1; i <= n; i++){
            if(!visited[i]) dfs(i);
        }
        memset(visited, false, sizeof(visited));
        int count = 0;
        while(!st.empty()){
            int index = st.top(); st.pop();
            if(!visited[index]){
                count++;
                dfs2(index);
            }
        }
        cout << count << "\n";
        for(int i = 1; i <= n; i++){
            adjList[i].clear();
        }
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}