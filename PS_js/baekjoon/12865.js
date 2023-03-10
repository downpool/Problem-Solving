let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let temp = input[0].split(' ');
let N = Number(temp[0]);
let K = Number(temp[1]);

let dp = Array.from(Array(101), () => Array(100001).fill(0));
let size = Array(101);
let price = Array(101);
for(let i = 1; i <= N; i++){
    let tempp = input[i].split(' ');
    size[i] = Number(tempp[0]);
    price[i] = Number(tempp[1]);
}
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
        if (j >= size[i])
            dp[i][j] = Math.max(dp[i - 1][j], price[i] + dp[i - 1][j - size[i]]);
        else dp[i][j] = dp[i - 1][j];
    }
}
console.log(dp[N][K]);