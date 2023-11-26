#include <bits/stdc++.h>
using namespace std;

const int MAXINT = 2000000;

bool check[MAXINT + 1];
int point[MAXINT + 1];

void solve(){
    int n, k;
    cin >> n >> k;
    check[n] = true;
    point[n] = 0;
    queue<int> q;
    q.push(n);
    while(!q.empty()){
        int now = q.front();
        q.pop();
        if(now - 1 >= 0){
            if(!check[now - 1]){
                q.push(now - 1);
                check[now - 1] = true;
                point[now - 1] = point[now] + 1;
            }
        }
        if(now + 1 < MAXINT) {
            if(!check[now + 1]){
                q.push(now + 1);
                check[now + 1] = true;
                point[now + 1] = point[now] + 1;
            }
        }
        if(now * 2 < MAXINT){
            if(!check[now * 2]){
                q.push(now * 2);
                check[now * 2] = true;
                point[now * 2] = point[now] + 1;
            }
        }
    }
    cout << point[k];

}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}