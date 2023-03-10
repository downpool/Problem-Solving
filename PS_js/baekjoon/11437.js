let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let nodescount = Number(input[0]);
let parent = Array(nodescount + 1);
parent[0] = [0];
let visit = Array(nodescount + 1).fill(false)
let depth = Array(nodescount + 1);

function lca(a, b){
    if(depth[a] < depth[b]){
        let temp = a;
        a = b;
        b = temp;
    }
    while(depth[a] != depth[b]){
        a = parent[a];
    }
    while(a != b){
        a = parent[a];
        b = parent[b];
    }
    return a;
}

let graph = {};
for(let i = 1; i <= nodescount; i++){
    graph[i] = [];
    parent[i] = i;
}

for(let i = 1; i < nodescount; i++){
    let temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    graph[temp[0]].push(temp[1]);
    graph[temp[1]].push(temp[0]);
}

//루트는 1번이다.
depth[1] = 0;
visit[1] = true;
let queue = [1];
parent[1] = 0;

while(queue.length){
    let temp = queue.shift();
    graph[temp].forEach(e => {
        if(!visit[e]){
            depth[e] = depth[temp] + 1;
            visit[e] = true;
            parent[e] = temp;
            queue.push(e);
        }
    })
}

for(let i = nodescount + 1; i < input.length; i++){
    let m = input[i].split(' ');
    console.log(lca(Number(m[0]), Number(m[1])));
}