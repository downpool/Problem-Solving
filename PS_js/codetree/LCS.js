function solution(s1, s2) {
    let arr1 = s1.split("")
    let arr2 = s2.split("")

    let dp = Array.from(Array(arr1.length), () => Array(arr2.length));
    dp[0][0] = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            dp[i][0] = 1;
            dp[0][j] = 1;
        }
    }
    for (let i = 1; i < arr1.length; i++) {
        for (let j = 1; j < arr2.length; j++) {
            if (arr1[i] != arr2[j]) {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    return dp;
}

console.log(solution("ABCDE", "BDFAD"));
