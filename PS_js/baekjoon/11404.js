let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let size = Number(input.shift());
input.shift();
let graph = Array.from(Array(size + 1), () => Array(size + 1).fill(1000000000));
for(let i = 1; i <= size; i++){
    graph[i][i] = 0;
}
for(let i = 0; i < input.length; i++){
    let temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    temp[2] = Number(temp[2]);
    if(graph[temp[0]][temp[1]] > temp[2]){
        graph[temp[0]][temp[1]] = temp[2];
    }
}
for(let k = 1; k <= size; k++){
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            if(graph[i][j] > (graph[i][k] + graph[k][j])){
                graph[i][j] = graph[i][k] + graph[k][j];
            }
        }
    }
}
for(let i = 1; i <= size; i++){
    for(let j = 1; j <= size; j++){
        if(graph[i][j] == 1000000000){
            graph[i][j] = 0;
        }
    }
    let ans = graph[i].join(' ');
    console.log(ans);
}