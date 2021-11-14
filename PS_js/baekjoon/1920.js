let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[1];
let sec = input[3];
function solution(arr, arr2){
    let answer = [];
    let map = new Map();
    for(let i of arr){
        map.set(i, 1);
    }
    for(let i of arr2){
        if(map.has(i)){
            answer.push(1);
        }else{
            answer.push(0);
        }
    }

    return answer;
}
for(let i of solution(fir.split(' '), sec.split(' '))){
    console.log(i);
}