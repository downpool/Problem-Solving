let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input[0] = Number(input[0]);
input[1] = Number(input[1]);
input[2] = Number(input[2]);

console.log((input[0] + input[1]) % input[2]);
console.log((input[0] + input[1]) % input[2]);
console.log((input[0] * input[1]) % input[2]);
console.log((input[0] * input[1]) % input[2]);