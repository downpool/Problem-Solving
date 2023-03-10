let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let tsize = Number(input.shift());

function bfs(g, v, visit){
    let queue = [v];
    visit[v] = true;
}

function checkCycle(size, graph){
    let visited = Array(size + 1).fill(false);
    visited[0] = true;
    for(let i = 0; i < size; i++){
        if(!visited[i]){
            bfs(graph, i, visited);
        }else{

        }
    }
}

for(let i = 0; i < tsize; i++){
    let graph = {};
    input.shift();
}