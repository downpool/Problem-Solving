let input = ['5',
'7',
'3 8',
'8 1 0',
'2 7 4 4',
'4 5 2 6 5'];
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input.shift());
let arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
for(let i = 0; i < input.length; i++){
    let n = input[i].split(' ');
    for(let j = 0; j < n.length; j++){
        arr[i][j] = Number(n[j]);
        dp[i][j] = Number(n[j]);
    }
}
for(let i = 1; i < n; i++){
    dp[i][0] += dp[i - 1][0];
    for(let j = 1; j < i; j++){
        dp[i][j] += Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    }
    dp[i][i] += dp[i - 1][i - 1];
}

console.log(Math.max(...dp[n - 1]));