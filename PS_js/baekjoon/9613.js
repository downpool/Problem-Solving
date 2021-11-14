let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

function gcd(a, b){
    let k = a % b;
    if(k == 0) return b;
    else return gcd(b, k);
}

function solution(arr){
    let answer = 0;
    
    for(let i = 1; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            answer += gcd(Number(arr[i]), Number(arr[j]));
        }
    }
    return answer;
}
for(let i = 1; i <= input[0]; i++){
    console.log(solution(input[i].split(' ')))
}