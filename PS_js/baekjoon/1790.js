let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function calc(N) {
    let ans = 0;
    for (let s = 1, leng = 1; s <= N; s *= 10, leng++) {
        let e = s * 10 - 1;
        if (e > N) {
            e = N;
        }
        ans += (e - s + 1) * leng;
    }
    return ans;
}

let n = Number(input[0]);
let k = Number(input[1]);

if(calc(n) < k){
    console.log(-1);
    return;
}
let left = 1;
let right = n;
let ans = 0;
while(left <= right){
    let mid = Math.floor((left + right) / 2);
    let len = calc(mid);
    if(len < k){
        left = mid + 1;
    }else{
        ans = mid;
        right = mid - 1;
    }
}
let s = ans.toString();
let l = calc(ans);
console.log(s[s.length - (l - k) - 1]);