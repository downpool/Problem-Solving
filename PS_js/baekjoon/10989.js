// let input = ["10",
// "5",
// "2",
// "3",
// "1",
// "4",
// "2",
// "3",
// "5",
// "1",
// "7"]
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()

input.sort((a, b) => {return a - b;})

for(let i of input) {
    console.log(i)
}