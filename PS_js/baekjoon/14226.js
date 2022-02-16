// let input = 18;
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let S = Number(input);
let dist = Array.from(Array(1001), () => Array(1001).fill(-1));

dist[1][0] = 0;
let queue = [[1, 0]];
while(queue.length){
    let node = queue.shift();
    if(dist[node[0]][node[0]] == -1){
        dist[node[0]][node[0]] = dist[node[0]][node[1]] + 1;
        queue.push([node[0], node[0]]);
    }
    if((node[0] + node[1]) <= S && dist[node[0] + node[1]][node[1]] == -1){
        dist[node[0] + node[1]][node[1]] = dist[node[0]][node[1]] + 1;
        queue.push([node[0] + node[1], node[1]]);
    }
    if(node[0] - 1 >= 0 && dist[node[0] - 1][node[1]] == -1){
        dist[node[0] - 1][node[1]] = dist[node[0]][node[1]] + 1;
        queue.push([node[0] - 1, node[1]]);
    }
}
let ans = -1;
for(let i = 0; i <= S; i++){
    if(dist[S][i] != -1){
        if(ans == -1 || ans > dist[S][i]){
            ans = dist[S][i];
        }
    }
}
console.log(ans);