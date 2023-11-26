#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;

vector<pair<int, int> > graph[100001];

void solve(){
    int V;
    cin >> V;
    for(int i = 1; i <= V; i++){
        int nodeNum, a, b;
        cin >> nodeNum;
        while(1){
            cin >> a;
            if(a != -1){
                cin >> b;
                graph[nodeNum].push_back(make_pair(a, b));
            }else{
                break;
            }
        }
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}