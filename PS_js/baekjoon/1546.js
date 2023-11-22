let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0] * 1;
let score = input[1].split(" ");

let max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
    sum += score[i] / max * 100;
}

console.log(sum / num);