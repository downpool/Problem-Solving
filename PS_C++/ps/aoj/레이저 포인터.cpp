#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

void solve() {
    int a, b, c, d;
    cin >> a >> b >> c >> d;

    if (a == c || b == d) {
        cout << 0;
    } else {
        cout << 1;
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}