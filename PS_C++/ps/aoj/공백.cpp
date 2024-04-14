#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

void solve() {
    string str = "";
    getline(cin, str);

    istringstream ss(str);
    string strBuffer;
    vector<string> v;

    v.clear();
    while (getline(ss, strBuffer, ' ')) {
        v.push_back(strBuffer);
    }

    cout << v.size() - 1;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}