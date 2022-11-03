let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ');
let ans = 0;
for(let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
}

arr.sort((a, b) => a - b);

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j <= i; j++){
        ans += arr[j];
    }
}
console.log(ans);