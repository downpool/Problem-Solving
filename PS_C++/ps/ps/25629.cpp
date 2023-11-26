#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

void solve() {
    int N;
    cin >> N;
    int a[N + 1];
    for (int i = 0; i < N; i++) {
        cin >> a[i];
    }
    int even = 0, odd = 0;
    for (int i = 0; i < N; i++) {
        if (a[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    if ((even - odd) <= 1 && (even - odd) >= -1) {
        cout << 1;
    } else {
        cout << 0;
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}