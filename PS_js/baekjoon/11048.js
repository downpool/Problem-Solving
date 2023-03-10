let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let map = Array.from(Array(input.length), () => Array());
input.shift();
