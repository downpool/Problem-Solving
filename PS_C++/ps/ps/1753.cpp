#include <bits/stdc++.h>
using namespace std;
#define ll long long
const int inf = 1000000000;

struct Edge {
    int to, cost;
    Edge(int to, int cost) : to(to), cost(cost){}
};

vector<Edge> graph[300001];
int v = 20001;
int k, e;
bool check[20001];
int dist[20001];

void dijkstra(int s){
    dist[s] = 0;
    priority_queue<pair<int, int> > pq;
    pq.push(make_pair(0, s));
    while(!pq.empty()){
        auto p = pq.top();
        pq.pop();
        int now = p.second;
        if(check[now]) continue;
        else check[now] = true;
        for(Edge t : graph[now]){
            int dis = t.to;
            if(dist[dis] > dist[now] + t.cost){
                dist[dis] = dist[now] + t.cost;
                pq.push(make_pair(-dist[dis], dis));
            }
        }
    }
}

void solve(){
    cin >> v >> e;
    cin >> k;
    for(int i = 1; i <= v; i++){
        dist[i] = inf;
    }
    memset(check, false, v + 1);
    for(int i = 0; i < e; i++){
        int a, b, c;
        cin >> a >> b >> c;
        graph[a].push_back(Edge(b, c));
    }
    dijkstra(k);
    for(int i = 1; i <= v; i++){
        if(dist[i] >= inf){
            cout << "INF" << "\n";
        }else{
            cout << dist[i] << "\n";
        }
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}