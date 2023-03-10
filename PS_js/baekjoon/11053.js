let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ');
let dp = Array(arr.length).fill(0);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
}
let ans = 0;
for (let i = 1; i < dp.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i] && dp[j] > max) {
            max = dp[j];
        }
    }
    dp[i] = max + 1;
    ans = Math.max(ans, dp[i])
}
console.log(ans);