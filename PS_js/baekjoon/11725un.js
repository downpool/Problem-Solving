let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let leng = Number(input[0]);
let visit = Array(leng + 1).fill(false);
let parent = Array(leng + 1).fill(0);
visit[0] = true;
parent[0] = 1;
let graph = {};
for(let i = 1; i <= leng; i++){
    graph[i] = [];
}
input.splice(0, 1);
for(let i of input){
    let temp = i.split(' ');
    temp[0] = Number(temp[0]); 
    temp[1] = Number(temp[1]); 
    graph[temp[0]].push(temp[1]);
    graph[temp[1]].push(temp[0]);
}

function DFS(n){
    visit[n] = true;
    graph[n].forEach(i => {
        if(!visit[i]){
            parent[i] = n;
            DFS(i);
        }
    })
}

DFS(1);
for(let i = 2; i <= leng; i++){
    console.log(parent[i]);
}