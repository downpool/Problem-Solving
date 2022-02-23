// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['4 11',
'802',
'743',
'457',
'539']
let temp = input.shift().split(' ');
let size = Number(temp[1]);
for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
}

function ok(N, arr, want) {
    let cnt = 0;
    for (let i of arr) {
        cnt += Math.floor(i / N);
    }
    return cnt >= want;
}

let left = 0, right = Math.max(...input);
let ans = 0;
while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(ok(mid, input, size)){
        if(ans < mid){
            ans = mid;
        }
        left = mid + 1;
    }else{
        right = mid - 1;
    }
}
console.log(ans);