let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let inp = input[1].split(' ');
for(let i = 0; i < inp.length; i++){
    inp[i] = Number(inp[i]);
}
let dp = [];
for(let i = 0; i < inp.length; i++){
    dp[i] = inp[i];
    if(dp[i] < dp[i - 1] + inp[i]){
        dp[i] = dp[i - 1] + inp[i];
    }
}
console.log(Math.max(...dp));