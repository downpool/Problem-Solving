let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let n = Number(input[0]);
let memo = Array(1001).fill(0);
function DP(l){
    if(l == 1) return 1;
    if(l == 2) return 2;
    if(memo[l] != 0) return memo[l];
    return memo[l] = (DP(l - 1) + DP(l - 2)) % 10007; 
}

console.log(DP(n));