let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let leng = Number(input[0]);
let graph = Array.from(Array(leng + 1), () => Array(leng + 1).fill(10000000000));
for (let i = 2; i < input.length - 1; i++) {
    let temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    temp[2] = Number(temp[2]);
    
    if(graph[temp[0]][temp[1]] > temp[2]){
        graph[temp[0]][temp[1]] = temp[2];
    }
}
let dist = Array(leng + 1).fill(10000000000);
let visit = Array(leng + 1).fill(false);
let sne = input[input.length - 1].split(' ');
sne[0] = Number(sne[0]);
sne[1] = Number(sne[1]);
dist[sne[0]] = 0;
for(let k = 0; k < leng - 1; k++){
    let m = 10000000001;
    let x = -1;
    for(let i = 1; i <= leng; i++){
        if(!visit[i] && m > dist[i]){
            m = dist[i];
            x = i;
        }
    }
    visit[x] = true;
    for(let i = 1; i <= leng; i++){
        if(dist[i] > dist[x] + graph[x][i]){
            dist[i] = dist[x] + graph[x][i];
        }
    }
}
console.log(dist[sne[1]]);