#include <bits/stdc++.h>
using namespace std;

int euclide(int a, int b) {
    int r = a % b;
    if (r == 0) {
        return b;
    } else {
        return euclide(b, r);
    }
}

void solve() {
    int n;
    cin >> n;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}