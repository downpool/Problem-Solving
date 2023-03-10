#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

unsigned long long fact(unsigned long long n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
unsigned long long a, b;

void solve() {
    cin >> a >> b;
    cout << fact(a) / (fact(b) * fact(a - b));
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}