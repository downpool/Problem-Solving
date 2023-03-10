#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

int distance(int x1, int y1, int x2, int y2) {
    int x = abs(x1 - x2);
    int y = abs(y1 - y2);
    return x + y;
}

vector<pair<int, int>> point;
void solve() {
    int N;
    cin >> N;
    int compx, compy, homex, homey;
    cin >> compx >> compy >> homex >> homey;
    point.push_back(make_pair(compx, compy));

    for (int i = 0; i < N; i++) {
        int tempx, tempy;
        cin >> tempx >> tempy;
        point.push_back(make_pair(tempx, tempy));
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T;
    cin >> T;
    for (int i = 1; i <= T; i++) {
        cout << "#" << i << " " << solve() << "\n";
    }

    return 0;
}