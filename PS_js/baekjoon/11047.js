let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let need = input.shift().split(' ');
need[1] = Number(need[1]);
let ans = 0;
for(let i = input.length - 1; i >= 0; i--){
    ans += Math.floor(need[1] / input[i]);
    need[1] %= input[i];
}
console.log(ans);