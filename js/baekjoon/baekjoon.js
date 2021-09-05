let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[0];
let inp = [];
for(let c = 1; c <= fir; c++){
    inp.push(Number(input[c]));
}

function solution(n){
    let answer = [];
    
    return answer;
}
for(let i of inp){
    console.log(solution(i));
}