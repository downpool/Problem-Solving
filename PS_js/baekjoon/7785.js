let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let user = new Set();
for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    if(temp[1] == 'enter'){
        user.add(temp[0]);
    }else{
        user.delete(temp[0]);
    }
}
let ans = Array.from(user);
ans.sort().reverse();
//줄바꿈으로 조인....ㄷㄷ
console.log(ans.join('\n'));