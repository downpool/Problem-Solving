let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    let ans = [];
    for(let j of temp){
        ans.push(j.split('').reverse().join(''));
    }
    console.log(ans.join(' '));
}