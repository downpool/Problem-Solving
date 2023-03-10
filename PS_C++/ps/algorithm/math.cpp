#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

// n이 소수인지
bool prime(int n) {
    if (n < 2)
        return false;
    for (int x = 2; x * x <= n; x++) {
        if (n % x == 0)
            return false;
    }
    return true;
}
// n의 소인수 분해를 벡터로
vector<int> factors(int n) {
    vector<int> f;
    for (int x = 2; x * x <= n; x++) {
        while (n % x == 0) {
            f.push_back(x);
            n /= x;
        }
    }
    if (n > 1)
        f.push_back(n);
    return f;
}

//에라토스테네스의 체
int sieve[101] = {0};

void erato(int n) {
    for (int x = 2; x <= n; x++) {
        if (sieve[x])
            continue;
        for (int u = 2 * x; u <= n; u += x) {
            sieve[u] = 1;
        }
    }
}

//유클리드 알고리즘(유클리드 호제법)
//최소 공약수
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// gcd를 이용한 최소공배수
int lcm(int a, int b) {
    int ans = a * b;
    return ans / gcd(a, b);
}
//확장 유클리드 알고리즘
// ax + by = gcd(a, b)

tuple<int, int, int> gcd(int a, int b) {
    if (b == 0) {
        return {1, 0, a};
    } else {
        return 0;
    }
}

void solve() {}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}