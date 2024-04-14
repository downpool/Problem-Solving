let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i of input){
    let temp = i.split(' ');
    let n1 = Number(temp[0]);
    let n2 = Number(temp[1]);
    console.log(n1 + n2);
}