let n = require('fs').readFileSync('/dev/stdin').toString().trim();
n = Number(n);
let arr = Array(n + 1).fill(0);
arr[1] = 0;

for(let i = 2; i <= n; i++){
    arr[i] = arr[i - 1] + 1;
    if(i % 2 == 0 && arr[i] > arr[i / 2] + 1){
        arr[i] = arr[i / 2] + 1;
    }
    if(i % 3 == 0 && arr[i] > arr[i / 3] + 1){
        arr[i] = arr[i / 3] + 1;
    }
}

console.log(arr[n]);