let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let node = Number(input[0]);
let trees = Array.from(Array(node + 1), () => Array(2).fill(-1));
for(let i = 1; i < node; i++){
    let temp = input[i].split(' ');
    
}