let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    let n1 = Number(temp[0]);
    let n2 = Number(temp[1]);
    console.log(`Case #${i}: ${n1} + ${n2} = ${n1 + n2}`);
}