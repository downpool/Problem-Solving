let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let inp = input.shift().split(' ');
inp[0] = Number(inp[0]);
inp[1] = Number(inp[1]);
let graph = {};
for(let i = 0; i < input.length; i++){
    graph[i] = input[i].split('');
}
let movex = [1, 0, -1, 0];
let movey = [0, 1, 0, -1];
let queue = [[0, 0]];
let visit = Array.from(Array(100), () => Array(100).fill(false));
let dist = Array.from(Array(100), () => Array(100));
visit[0][0] = true;
dist[0][0] = 1;
while(queue.length){
    let temp = queue.shift();
    for(let i = 0; i < 4; i++){
        let nx = temp[0] + movex[i];
        let ny = temp[1] + movey[i];
        if(0 <= nx && nx < inp[0] && 0 <= ny && ny < inp[1]){
            if(visit[nx][ny] == false && graph[nx][ny] == 1){
                queue.push([nx, ny]);
                dist[nx][ny] = dist[temp[0]][temp[1]] + 1;
                visit[nx][ny] = true;
            }
        }
    }
}
console.log(dist[inp[0] - 1][inp[1] - 1]);