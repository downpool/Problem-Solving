//문제 조건을 제대로 읽자....;

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let graph = {};
let inp = input.shift().split(' ');
for(let i = 1; i <= Number(inp[0]); i++){
    graph[i] = [];
}

for(let i of input){
    let temp = i.split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    graph[temp[0]].push(temp[1]);
    graph[temp[1]].push(temp[0]);
}
for(let i = 1; i <= Number(inp[0]); i++){
    graph[i].sort((a, b) => {return a - b});
}
let ansdfs = [];
let ansbfs = [];

function DFS(v, visit){
    visit[v] = true;
    ansdfs.push(v);

    graph[v].forEach(e => {
        if(!visit[e]){
            DFS(e, visit);
        }
    })
}

function BFS(v, visit){
    let queue = [v];
    visit[v] = true;

    while(queue.length){
        let node = queue.shift();
        ansbfs.push(node);
        graph[node].forEach(e => {
            if(!visit[e]){
                queue.push(e);
                visit[e] = true;
            }
        })
    }
}
let visitd = Array(Number(inp[0]) + 1).fill(false);
let visitb = Array(Number(inp[0]) + 1).fill(false);
visitd[0] = true;
visitb[0] = true;
DFS(Number(inp[2]), visitd);
BFS(Number(inp[2]), visitb);
console.log(ansdfs.join(' '));
console.log(ansbfs.join(' '));