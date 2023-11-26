let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let inp = input[1].split(' ');
let leng = Number(input[0]);
let min = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].slice(0, leng + 1);
let max = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'].slice(0, leng + 1);
