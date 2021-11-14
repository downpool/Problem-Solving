// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// //입력 형태 변환
let input = ['13', 'but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours'];

function solution(inp) {
    let answer = new Set();
    inp.shift();
    answer = inp.sort((a, b) => {
        if(a.length == b.length){
            return a > b ? 1 : -1;
        }else{
            return a.length - b.length;
        }
    });
    answer = answer.filter((e, i) => {
        return answer.indexOf(e) === i;
    });
    
    return answer;
}
let arr = solution(input);
for (let i of arr) {
    console.log(i);
}