let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[0];

function solution(n) {
    let answer = '';
    let arr = n.split('');
    let stack = [];
    let rev = true;
    for (let i of arr) {
        if(!rev) {
            if(i == '>'){
                rev = true;
            }
            answer += i;
            continue;
        }
        if (i == '<') {
            if(stack.length != 0){
                answer += stack.reverse().join('');
                stack.length = 0;
            }
            answer += i;
            rev = false;
        } else if (i == ' ') {
            if(stack.length != 0){
                answer += stack.reverse().join('');
                stack.length = 0;
            }
            answer += ' ';
        } else {
            stack.push(i);
        }
    }
    answer += stack.reverse().join('');

    return answer;
}

console.log(solution(fir));