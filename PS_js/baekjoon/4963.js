let input = ["1 1",
    "0",
    "2 2",
    "0 1",
    "1 0",
    "3 2",
    "1 1 1",
    "1 1 1",
    "5 4",
    "1 0 1 0 0",
    "1 0 0 0 0",
    "1 0 1 0 1",
    "1 0 0 1 0",
    "5 4",
    "1 1 1 0 1",
    "1 0 1 0 1",
    "1 0 1 0 1",
    "1 0 1 1 1",
    "5 5",
    "1 0 1 0 1",
    "0 0 0 0 0",
    "1 0 1 0 1",
    "0 0 0 0 0",
    "1 0 1 0 1",
    "0 0"]
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

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

for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
        if (maps[i][j] == "1") {
            dfs(i, j);
            count++;
        }
    }
}

function dfs(i, j) {
    if (i < 0 || i >= N || j < 0 || j >= N || maps[i][j] != "1") {
        return;
    }
    maps[i][j] = "0";

    dfs(i, j + 1);
    dfs(i + 1, j + 1);
    dfs(i + 1, j - 1);
    dfs(i - 1, j + 1);
    dfs(i - 1, j - 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
}