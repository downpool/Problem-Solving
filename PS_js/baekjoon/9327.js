let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let size = input.shift();
size = Number(size);
for(let i = 0; i < size; i++){
    let c = input.shift().split(' ');
    console.log(c[0] - 1);
    input = input.slice(Number(c[1]));
}