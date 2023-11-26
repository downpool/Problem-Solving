#include <bits/stdc++.h>
using namespace std;

struct Edge{
    int to;
    int cost;
    Edge(int to, int cost) : to(to), cost(cost){}
};

vector<Edge> graph[1001];
int dist[1001];
bool check[1001];
int inf = 100000000;
void solve(){
    int n, m, start, end;
    cin >> n;
    cin >> m;
    for(int i = 0; i < m; i++){
        int u, v, w;
        cin >> u >> v >> w;
        graph[u].push_back(Edge(v, w));        
    }
    for(int i = 1; i <= n; i++){
        dist[i] = inf;
    }
    cin >> start >> end;
    dist[start] = 0;
    for(int k = 0; k < n - 1; k++){
        int m = inf + 1;
        int x = -1;
        for(int i = 1; i <= n; i++){
            if(!check[i] && m > dist[i]){
                m = dist[i];
                x = i;
            }
        }
        check[x] = true;
        for(int i = 0; i < graph[x].size(); i++){
            int y = graph[x][i].to;
            if(dist[y] > dist[x] + graph[x][i].cost){
                dist[y] = dist[x] + graph[x][i].cost;
            }
        }
    }
    cout << dist[end];

}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}