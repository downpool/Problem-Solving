let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

let ar = input[0].split(' ').join('');
let ar2 = input[0].split(' ').sort((a, b) => a - b).join('');
let ar3 = input[0].split(' ').sort((a, b) => b - a).join('');
if(ar == ar2){
    console.log('ascending');
}else if(ar == ar3){
    console.log('descending');
}else{
    console.log('mixed');
}