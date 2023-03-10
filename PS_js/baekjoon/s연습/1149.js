let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cost = Array.from(Array(1001), () => Array(3));
let n = Number(input.shift());
for (let i = 0; i < input.length; i++) {
    let ar = input[i].split(' ');
    cost[i][0] = Number(ar[0]);
    cost[i][1] = Number(ar[1]);
    cost[i][2] = Number(ar[2]);
}
let dp = Array.from(Array(1001), () => Array(3));
dp[0][0] = cost[0][0];
dp[0][1] = cost[0][1];
dp[0][2] = cost[0][2];
for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2];
}
console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));