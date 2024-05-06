// let input = ["7",
//     "0110100",
//     "0110101",
//     "1110101",
//     "0000111",
//     "0100000",
//     "0111110",
//     "0111000"]
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let maps = Array.from(Array(N), () => Array(N));

for (let i = 1; i < input.length; i++) {
    let line = input[i].split('');
    for (let j = 0; j < line.length; j++) {
        maps[i - 1][j] = line[j];
    }
}

// console.log(...maps);

let count = 0;
let array = [];
for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
        if (maps[i][j] == "1") {
            var sum = 0;
            dfs(i, j);
            array.push(sum);
            count++;
        }
    }
}

console.log(count);
let array1 = array.sort((a, b) => { return a - b; });
for (let i of array1) {
    console.log(i);
}

function dfs(i, j) {
    if (i < 0 || i >= N || j < 0 || j >= N || maps[i][j] != "1") {
        return;
    }
    sum++;
    maps[i][j] = "0";

    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
}