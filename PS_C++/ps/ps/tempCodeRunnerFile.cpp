
int v[101] = {0};
int dp[101][10000001] = {0};

void solve() {
    int N, K;
    cin >> N >> K;

    for (int i = 0; i < N; i++) {
        cin >> v[i];
    }
    for (int i = 0; i < N; i++) {
        cin >> w[i];
    }
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < K; j++) {
            if (j - w[i] >= 0) {
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    cout << dp[N][K];
}