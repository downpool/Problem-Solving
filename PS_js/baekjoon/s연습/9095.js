let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
for(let i = 0; i < input.length; i++){
    input[i] = Number(input[i]);
}
let dp = Array(12);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for(let i = 4; i < 12; i++){
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}
for(let i of input){
    console.log(dp[i]);
}