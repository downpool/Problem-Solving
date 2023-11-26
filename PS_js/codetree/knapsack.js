function solution(C, weight, value, n) {
    let dp = Array.from(Array(n + 1), () => Array(C + 1).fill(-1));
    
    for(let i = 0; i <= n; i++){
        dp[i][0] = 0;
    }
    for(let i = 0; i <= C; i++){
        dp[0][i] = 0;
    }
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= C; j++){
            if(weight[i - 1] <= j){
                dp[i][j] = Math.max(value[i - 1] + dp[i - 1][j - weight[i - 1]], dp[i - 1][j])
            }else{
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp;
}

console.log(solution(20, [2, 6, 2, 3, 4, 5, 4, 6, 7, 10], [3, 5, 4, 2, 3, 3, 2, 6, 9, 8], 10));

//         int[] coins = new int[] {4,5,9};
                
//         int[] dp = new int[22];

//         //dp[i] : i원을 거슬러주기 위해 필요한 최소 동전 수
//         for(int i=1;i<22;i++) {
//             int minVal = i;
//             for(int coin : coins) {
//                 if(i-coin>=0) {
//                     minVal = Math.min(minVal, dp[i-coin]);
//                 }
//             }
//             dp[i] = minVal+1;
//         }