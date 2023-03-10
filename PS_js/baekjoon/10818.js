let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ');
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < arr.length; i++){
    if(min > Number(arr[i])) min = Number(arr[i]);
    if(max < Number(arr[i])) max = Number(arr[i]);
}
let ans = '';
ans += min;
ans += ' ';
ans += max;
console.log(ans);