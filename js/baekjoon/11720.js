let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[1];

function solution(n) {
    let answer = n.split('').reduce((a, b) => Number(a) + Number(b), 0);
    return answer;
}

console.log(solution(fir));