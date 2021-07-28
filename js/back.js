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

let max = 0;
for(let i = 0; i < n - 2; i++){
    for(let j = i + 1; j < n - 1; j++){
        for(let k = j + 1; k < n; k++){
            let temp = arr[i] + arr[j] + arr[k];
            if(temp >= max && temp <= m){
                max = temp;
            }
        }
    }
}

console.log(max);