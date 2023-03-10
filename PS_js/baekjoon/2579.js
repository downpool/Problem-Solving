let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input.shift());
let arr = Array(input.length);
for(let i = 0; i < input.length; i++){
    arr[i] = Number(input[i]);
}
let dp = Array(301);
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);

for(let i = 3; i < arr.length; i++){
    dp[i] = Math.max(arr[i] + dp[i - 2], arr[i] + arr[i - 1] + dp[i - 3]);
}
console.log(dp[n - 1]);