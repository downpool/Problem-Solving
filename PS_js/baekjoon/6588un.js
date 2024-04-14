let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

let arr = [];
for(let i of input){
    if(i != 0){
        arr.push(Number(i));
    }
}