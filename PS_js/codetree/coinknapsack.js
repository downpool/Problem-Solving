function solution() {
    let dp = Array(22);
    let arr = [1, 4, 5, 9];
    dp[0] = 0;

    for (let i = 1; i < 22; i++) {
        let minValu = i;
        for(let j of arr){
            if(i - j >= 0){
                minValu = Math.min(minValu, dp[i - j]);
            }
        }
        dp[i] = minValu + 1;
    }
    console.log(...dp);
}

solution();

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