#include <bits/stdc++.h>
using namespace std;
#define ll long long

struct Edge{
    int to;
    int cost;
    bool operator < (const Edge &other) const{
        return cost > other.cost;
    }
};

vector<Edge> a[1001];
bool c[1001];

void solve(){
    int n, m;
    cin >> n >> m;
    for(int i = 0; i < m; i++){
        int a1, a2, a3;
        cin >> a1 >> a2 >> a3;
        a[a1].push_back(Edge({a2, a3}));
        a[a2].push_back(Edge({a1, a3}));
    }
    c[1] = true;
    priority_queue<Edge> q;
    for(Edge e : a[1]){
        q.push(e);
    }
    int ans = 0;
    //bfs
    while(!q.empty()){
        Edge e = q.top();
        q.pop();
        if(c[e.to]){
            continue;
        }
        c[e.to] = true;
        ans += e.cost;
        int x = e.to;
        for(Edge ee : a[x]){
            q.push(ee);
        }
    }
    cout << ans << "\n";
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}