#include <bits/stdc++.h>
using namespace std;
#define INF 1000000000;
int zero = 0;
int one = 0;

int fibo(int n){
	if(n == 0){
		zero++;
		return 0;
	}else if(n == 1){
		one++;
		return 1;
	}else{
		return fibo(n - 1) + fibo(n - 2);
	}
}

void solve(){
	int T, N;
	cin >> T;
	for(int i = 0; i < T; i++){
		cin >> N;
		fibo(N);
		cout << zero << " " << one;
		zero = 0; one = 0;
	}
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    solve();
}
