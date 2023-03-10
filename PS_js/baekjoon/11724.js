let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let graph = {};
let range = input[0].split(' ');
for(let i = 1; i <= Number(range[0]); i++){
    graph[i] = [];
}
for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    graph[temp[0]].push(temp[1]);
    graph[temp[1]].push(temp[0]);
}

function dfs(g, v, visit){
    visit[v] = true;
    g[v].forEach(e => {
        if(!visit[e]){
            dfs(g, e, visit);
        }
    })
}
let visit = Array(Number(range[0]) + 1).fill(false);
visit[0] = true;
let mount = 0;
while(visit.includes(false)){
    let temp = visit.indexOf(false);
    dfs(graph, temp, visit);
    mount++;
}
console.log(mount);