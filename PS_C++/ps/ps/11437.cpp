#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

// struct Node {
//     int from, to1, to2;
//     Node(int from, int to1, int to2) : from(from), to1(to1), to2(to2) {}
// };

// vector<Node> trees[50001];

int tree[50001][3] = {0};

int LCA(int a, int b) {
    int depth;
    return 1;
}

void solve() {
    int N, M;
    cin >> N;
    for (int i = 0; i < N; i++) {
        int a, b;
        cin >> a >> b;
        tree[a][0] == 0 ? tree[a][0] = b : tree[a][1] = b;
    }
    cin >> M;
    for (int i = 0; i < M; i++) {
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}