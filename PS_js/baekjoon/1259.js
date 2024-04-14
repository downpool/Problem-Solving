let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

function isPalind(n){
    let k = n.toString();
    let j = n.toString().split('').reverse().join('');
    if(Number(k) == Number(j)) return true;
    else return false;
}

for(let i = 0; i < input.length - 1; i++){
    if(isPalind(input[i])){
        console.log('yes');
    }else{
        console.log('no');
    }
}