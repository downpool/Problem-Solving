let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let count = 0;
let n = Number(input[0]);
function DP(l){
    if(l == 1) return count;
    if(l % 3 == 0){
        count++;
        return DP(l / 3);
    }else if(l % 2 == 0){
        count++;
        return DP(l / 2);
    }else{
        count++;
        return DP(l - 1);
    }
}
console.log(DP(n));