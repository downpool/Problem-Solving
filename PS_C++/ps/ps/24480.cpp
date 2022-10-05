#include <bits/stdc++.h>
using namespace std;

int visited[100001];
vector<int> graph[100001];
int counting;

void dfs(int v) {
    visited[v] = counting++;

    for (int i = 0; i < graph[v].size(); i++) {
        int check = graph[v][i];
        if (visited[check] == 0) {
            dfs(check);
        }
    }
}

void solve() {
    int N, M, R;
    cin >> N >> M >> R;
    memset(visited, 0, N + 1);
    counting = 1;
    for (int i = 0; i < M; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    for (int i = 1; i <= N; i++) {
        sort(graph[i].rbegin(), graph[i].rend());
    }
    dfs(R);
    for (int i = 1; i <= N; i++) {
        cout << visited[i] << "\n";
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}