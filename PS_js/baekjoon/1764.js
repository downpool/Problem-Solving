let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let nandm = input[0].split(' ');
nandm[0] = Number(nandm[0]);
nandm[1] = Number(nandm[1]);
//맵을 사용하자!
let user = new Map();
let ans = [];
for(let i = 1; i <= nandm[0]; i++){
    user.set(input[i], 1);
}
for(let i = nandm[0] + 1; i < input.length; i++){
    if(user.has(input[i])){
        ans.push(input[i]);
    }
}
ans.sort();
console.log(ans.length);
console.log(ans.join('\n'));