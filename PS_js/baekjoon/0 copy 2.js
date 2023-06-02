// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let input = "10 30 10 20 50 10"
let numbers = input.split(" ").map(x => Number(x));
let memo = Array(1001).fill(1);

for(let i = input.length - 1; i >= 0; i--){
    
}

console.log(Math.max(...memo));