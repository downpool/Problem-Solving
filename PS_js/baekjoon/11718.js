let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//입력 형태 변환

function solution(arr){
    for(let i of arr){
        console.log(i);
    }
    return;
}
solution(arr);