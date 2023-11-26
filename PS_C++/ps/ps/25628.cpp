#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

void solve() {
    int a, b;
    cin >> a >> b;
    a /= 2;
    cout << (a < b ? a : b);
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}