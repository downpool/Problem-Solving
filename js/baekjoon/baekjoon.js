let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let fir = input[0].split(' ');
let n = fir[0];
let m = fir[1];

let arr = [];
let ar = input[1].split(' ');
for(let i = 0; i < n; i++){
    arr.push(Number(ar[i]));
}
