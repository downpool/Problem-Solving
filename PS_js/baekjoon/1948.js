let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let graph = {};
let n = Number(input[0]);
for(let i = 1; i <= n; i++){
    graph[i] = [];
}