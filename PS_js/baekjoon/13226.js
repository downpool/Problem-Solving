// let input = ["5",
//     "1 10",
//     "1000 1000",
//     "9999900 10000000",
//     "35 999",
//     "25 25"]
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = Array(10000001).fill(0);

for (let i = 1; i <= 10000000; i++) {
    for (let j = 1; j <= 10000000 / i; j++) {
        count[i * j]++;
    }
}

for (let i = 1; i < input.length; i++) {
    let line = input[i].split(' ').map(Number);
    let sliced = count.slice(line[0], line[1] + 1);
    console.log(Math.max(...sliced));
}