#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

int N, M, K;

int combination(int n, int r) {
    if (n == r || r == 0) {
        return 1;
    } else {
        return combination(n - 1, r - 1) + combination(n - 1, r);
    }
}

int fact(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

void solve() {
    cin >> N >> M >> K;
    double ans = combination(N, M) * 1.0;
    for (int i = M; i > K; i--) {
        ans -= combination(N, i) * combination(N, M - i);
    }
    cout << ans / combination(N, M) * 1.0;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}