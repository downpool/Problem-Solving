#include <bits/stdc++.h>
using namespace std;

stack<int> s;
int leng;
void solve(){
    string str;
    cin >> str;
    leng = str.size();
    int ans = 0;
    for(int i = 0; i < leng; i++){
        if(str[i] == '('){
            s.push(i);
        }else{
            if(s.top() + 1 == i){
                s.pop();
                ans += s.size();
            }else{
                s.pop();
                ans += 1;
            }
        }
    }
    cout << ans;
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}