let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i = 0; i < input.length; i++){
    input[i] = Number(input[i]);
}
let dp = Array(Math.max(...input) + 1);
dp[1] = 1;
dp[2] = 1;
dp[3] = 3;
dp[4] = 3;
for(let i = 5; i < dp.length; i++){}