#include <iostream>
using namespace std;
#define INF 1000000000
#define MAX_N 100010

char T[MAX_N], P[MAX_N];
int b[MAX_N], n, m;

void kmpPreprocess() {
    int i = 0, j = -1;
    b[0] = -1;
    while (i < m) {
        while (j >= 0 && P[i] != P[j])
            j = b[j];
        i++;
        j++;
        b[i] = j;
    }
}

void kmpSearch() {
    int i = 0, j = 0;
    while (i < n) {
        while (j >= 0 && T[i] != P[j])
            j = b[j];
        i++;
        j++;
        if (j == m) {
            printf("P is found at index %d in T", i - j);
            j = b[j];
        }
    }
}

void solve() {
    P = "ABABA";
    T = "ACABAABABDABABA";
    kmpPreprocess();
    kmpSearch();
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}