#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

void solve() {
    int N;
    cin >> N;
    for (int i = 0; i < N; i++) {
        string a;
        int b, c;
        cin >> a >> b >> c;
        int arr[] = new int[5];
        memset(arr, 1, sizeof(int) * 5);
        switch (a) {
        case "MON":
            arr[0] = 0;
            break;
        case "TUE":
            arr[1] = 0;
            break;
        case "WED":
            arr[2] = 0;
            break;
        case "THU":
            arr[3] = 0;
            break;
        case "FRI":
            arr[4] = 0;
            break;
        default:
            break;
        }
    }

    for (int i = 0; i < 5; i++) {
        if (arr[i] == 1) {
            switch (i) {
            case 0:
                cout << "MON"
                     << " ";
                break;
            case 1:
                cout << "TUE"
                     << " ";
                break;
            case 2:
                cout << "WED"
                     << " ";
                break;
            case 3:
                cout << "THU"
                     << " ";
                break;
            case 4:
                cout << "FRI"
                     << " ";
                break;
            default:
                break;
            }
        }
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}