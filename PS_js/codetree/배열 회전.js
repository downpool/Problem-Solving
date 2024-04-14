// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ["4 4 2",
    "1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"
]

let nmk = input[0].split(" ").map(Number);
let arrays = Array.from(Array(nmk[0]), () => Array(nmk[1]).fill(0));

for (let i = 1; i <= nmk[0]; i++) {
    let line = input[i].split(" ").map(Number);
    for (let j = 0; j < nmk[1]; j++) {
        arrays[i - 1][j] = line[j];
    }
}

console.log(...arrays);