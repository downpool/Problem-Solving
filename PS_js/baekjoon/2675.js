let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    let ar = temp[1].split('');
    let pri = '';
    for(let j = 0; j < ar.length; j++){
        for(let k = 0; k < Number(temp[0]); k++){
            pri += ar[j];
        }
    }
    console.log(pri);
}