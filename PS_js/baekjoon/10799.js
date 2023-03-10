let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[0];

function solution(n){
    let answer = 0;
    let arr = n.split('');
    let stack = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '('){
            stack.push(i);
        }else{
            stack.pop();
            if(arr[i - 1] == '('){
                answer += stack.length;
            }else{
                answer += 1;
            }
        }
    }    
    return answer;
}
console.log(solution(fir));
