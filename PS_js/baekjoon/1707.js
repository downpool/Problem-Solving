let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let testcase = Number(input.shift());
function dfs(v) {
    if (visited[v] != -1) return;
    visited[v] = 1;
    graph[v].forEach(i => {
        if ((visited[i] != visited[v]) || !visited[i]) {
            dfs(v);
        }
    });
}
for(let i = 0; i < testcase; i++){
    let vande = input.shift().split(' ');
    let graph = {};
    for(let j = 0; j < Number(vande[1]); j++){
        let line = input.shift().split(' ');
        line[0] = Number(line[0]);
        line[1] = Number(line[1]);
        graph[line[0]] = line[1];
        graph[line[1]] = line[0];
    }
    let visited = Array(Number(vande[0]) + 1).fill(0);
    visited[0] = -1;
}