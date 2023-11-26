// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['5',
'1 3 2 -1',
'2 4 4 -1',
'3 1 2 4 3 -1',
'4 2 4 3 3 5 6 -1',
'5 4 6 -1']
let graph = Array.from(Array(input.length), () => Array());
for (let i = 1; i < input.length; i++) {
    let temparr = input[i].split(' ');
    for (let j = 1; j < temparr.length - 1; j += 2) {
        graph[Number(temparr[0])].push([Number(temparr[j]), Number(temparr[j + 1])]);
    }
}
console.log(graph)
let lengths = Array(input.length).fill(0);
function dfs(v, ilength, visited) {
    visited[v] = true;
    graph[v].forEach(i => {
        if(!visited[i[0]]){
            console.log(i[1]);
            dfs(i[0], ilength + i[1], visited);
        }
    })
}
let maxlength = 0;
for (let i = 1; i < input.length; i++) {
    let visited = Array(input.length).fill(false);
    let ilength = 0;
    visited[0] = true;
    dfs(i, ilength, visited);
    console.log(ilength);
    maxlength = Math.max(maxlength, ilength);
}

console.log(maxlength);