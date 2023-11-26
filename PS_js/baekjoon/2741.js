let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let ans = '';
for(let i = 1; i <= Number(input); i++){
    ans += i;
    ans += '\n';
}
console.log(ans);