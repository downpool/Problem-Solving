let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i = 1; i < input.length; i++){
    let ans = 'Case #';
    ans += i;
    ans += ': ';
    let temp = input[i].split(' ');
    ans += Number(temp[0]) + Number(temp[1]);
    console.log(ans);
}