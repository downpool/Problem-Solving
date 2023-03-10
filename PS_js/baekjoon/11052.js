let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ');
input[0] = Number(input[0]);
for(let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
}
arr.unshift(0);
let ans = Array(arr.length).fill(0);
for(let i = 1; i <= input[0]; i++){
    for(let j = 1; j <= i; j++){
        ans[i] = Math.max(ans[i], ans[i - j] + arr[j]);
    }
}
console.log(ans[input[0]]);