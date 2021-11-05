let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let k = [];
for(let i of input[1].split(' ')){
    k.push(Number(i));
}

function solution(cnt, n){
    let answer = 0;
    let sum = n.reduce((a, b) => (a + b), 0);
    let k = new Set();
    function DP(l, num){
        k.add(num);
        if(l == cnt){
            return;
        }else{
            DP(l + 1, num + n[l]);
            DP(l + 1, num);
        }
    }
    DP(0, 0);
    answer = sum - k.size + 1;

    return answer;
}

console.log(solution(Number(input[0]), k));
console.log(solution(3, [1, 3, 4]));