#include <bits/stdc++.h>
using namespace std;
// typedef long long ll;
int tree[10001][4];
int cntt = 0;
int maxd = 1;
void inorder(int node, int degree){
    if(node == -1) return;
    inorder(tree[node][0], degree + 1);
    //
    tree[node][2] = ++cntt;
    tree[node][3] = degree;
    maxd = maxd < degree ? degree : maxd;
    inorder(tree[node][1], degree + 1);
}

void solve(){
    int n;
    cin >> n;
    bool root[10001] = { true };
    memset(root, false, n + 1);
    for(int i = 0; i < n; i++){
        int x, y, z;
        cin >> x >> y >> z;
        tree[x][0] = y;
        tree[x][1] = z;
        if(y != -1) root[y] = true;
        if(z != -1) root[z] = true;
    }
    root[0] = true;
    inorder(find(root, root + n + 1, false) - root, 1);
    int maxl[maxd + 1];
    int minl[maxd + 1];
    for(int i = 1; i <= maxd; i++){
        maxl[i] = 0;
        minl[i] = n + 1;
    }

    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= maxd; j++){
            if(tree[i][3] == j){
                if(maxl[j] < tree[i][2]){
                    maxl[j] = tree[i][2];
                }
                if(minl[j] > tree[i][2]){
                    minl[j] = tree[i][2];
                }
            }
        }
    }
    int gap = 0;
    int gapn = 0;
    for(int i = 1; i <= maxd; i++){
        if(gap < (maxl[i] - minl[i] + 1)){
            gap = maxl[i] - minl[i] + 1;
            gapn = i;
        }
    }
    cout << gapn << " " << gap << "\n";
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}