#include <bits/stdc++.h>
using namespace std;
#define ll long long

class Edge {
public:
    int node[2];
    int dist;

    Edge(int a, int b, int c){
        this->node[0] = a;
        this->node[1] = b;
        this->dist = c;
    }

    bool operator < (Edge &edge){
        return this->dist < edge.dist;
    }
};
vector<Edge> graph;
int parent[10001];

int Find(int x) {
    if (x == parent[x]) {
        return x;
    } else {
        return parent[x] = Find(parent[x]);
    }
}
void Union(int x, int y) {
    x = Find(x);
    y = Find(y);
    if(x < y) parent[y] = x;
    else parent[x] = y;
}


void solve() {
    int n, m;
    cin >> n >> m;
    for(int i = 1; i <= n; i++){
        parent[i] = i;
    }
    for(int i = 0; i < m; i++){
        int x, y, z;
        cin >> x >> y >> z;
        graph.push_back(Edge(x, y, z));
    }
    sort(graph.begin(), graph.end());
    int sum = 0;
    for(int i = 0; i < graph.size(); i++){
        if(!(Find(graph[i].node[0]) == Find(graph[i].node[1]))){
            sum += graph[i].dist;
            Union(graph[i].node[0], graph[i].node[1]);
        }
    }
    cout << sum;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}