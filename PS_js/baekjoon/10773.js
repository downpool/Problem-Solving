let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let stack = [];
input = input.slice(1);
for(let i of input){
    i = Number(i);
    if(i == 0){
        stack.pop();
    }else{
        stack.push(i);
    }
}
let ans = 0;
stack.forEach(e => {
    ans += e;
})
console.log(ans);