let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
for(let i = 1; i < input.length; i++){
    input[i] = Number(input[i]);
}
input.shift();
let maxArr = Array.from()
function DP(n, sum){
    if(n == 0){
        return sum;
    }else{
        DP(n - 1, sum + input[n]);
        DP(n - 2, sum + input[n]);
    }
}
let ans = DP(input.length - 1, 0);

console.log(ans);