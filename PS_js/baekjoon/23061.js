let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let tk = input[0].split(' ');
let n = Number(tk[0]);
let m = Number(tk[1]);
let maxval = Array(m + 1);
let valu = Array();
for (let i = 1; i < n + 1; i++){
    let temp = input[i].split(' ');
    valu.push([Number(temp[0]), Number(temp[1])]);
}
let count = 1;
let maxcnt = 1;
function effknap(maxbag) {
    let dp = Array.from(Array(n + 1), () => Array(maxbag + 1).fill(0));
    for (let i = 0; i < valu.length; i++){
        for (let j = 0; j < maxbag; j++){
            if (i < valu[i][0]) {
                dp[i][j] = dp[i][j - 1];      
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - valu[i][0]][j - 1] + valu[i][1]);
            }
        }
    }
    return Math.round(dp[n][maxbag] / maxbag);
}

for (let k = n + 1; k < input.length; k++){
    maxval[count] = effknap(Number(input[k]));
    if (maxval[maxcnt] > maxval[count]) {
        maxcnt = count;
    }
    count++;
}
console.log(maxcnt);