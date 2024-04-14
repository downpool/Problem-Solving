let input = ['5',
'8',
'1 2 2',
'1 3 3',
'1 4 1',
'1 5 10',
'2 4 2',
'3 4 1',
'3 5 1',
'4 5 3',
'1 5'];
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let leng = Number(input[0]);
// let graph = Array.from(Array(leng + 1), () => Array(leng + 1).fill(10000000000));
// let graphline = {};
// for(let i = 1; i <= leng; i++){
//     graphline[i] = [];
// }
// let distfrom = Array(leng + 1).fill(-1);
// for (let i = 2; i < input.length - 1; i++) {
//     let temp = input[i].split(' ');
//     temp[0] = Number(temp[0]);
//     temp[1] = Number(temp[1]);
//     temp[2] = Number(temp[2]);
//     if(graph[temp[0]][temp[1]] > temp[2]){
//         graph[temp[0]][temp[1]] = temp[2];
//         graphline[temp[0]].push(temp[1]);
//         distfrom[temp[1]] = temp[0];
//     }
// }
// let dist = Array(leng + 1).fill(10000000000);
// let visit = Array(leng + 1).fill(false);
// let sne = input[input.length - 1].split(' ');
// sne[0] = Number(sne[0]);
// sne[1] = Number(sne[1]);
// dist[sne[0]] = 0;
// distfrom[sne[0]] = sne[0];
// for(let k = 0; k < leng - 1; k++){
//     let m = 10000000001;
//     let x = -1;
//     for(let i = 1; i <= leng; i++){
//         if(!visit[i] && m > dist[i]){
//             m = dist[i];
//             x = i;
//         }
//     }
//     visit[x] = true;
//     graphline[x].forEach(e => {
//         if(dist[e] > dist[x] + graph[x][e]){
//             dist[e] = dist[x] + graph[x][e];
//         }
//     })
// }
// let ans = [sne[1]];
// let node = distfrom[sne[1]];
// while(node != sne[0]){
//     node = distfrom[node];
//     ans.unshift(node);
// }
// console.log(dist[sne[1]]);
// console.log(ans.length);
// console.log(ans.join(' '));

//sol 2
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let leng = Number(input[0]);
// let graph = Array.from(Array(leng + 1), () => Array(leng + 1).fill(10000000000));
// for (let i = 2; i < input.length - 1; i++) {
//     let temp = input[i].split(' ');
//     temp[0] = Number(temp[0]);
//     temp[1] = Number(temp[1]);
//     temp[2] = Number(temp[2]);
    
//     if(graph[temp[0]][temp[1]] > temp[2]){
//         graph[temp[0]][temp[1]] = temp[2];
//     }
// }
// let dist = Array(leng + 1).fill(10000000000);
// let visit = Array(leng + 1).fill(false);
// let sne = input[input.length - 1].split(' ');
// sne[0] = Number(sne[0]);
// sne[1] = Number(sne[1]);
// dist[sne[0]] = 0;
// for(let k = 0; k < leng - 1; k++){
//     let m = 10000000001;
//     let x = -1;
//     for(let i = 1; i <= leng; i++){
//         if(!visit[i] && m > dist[i]){
//             m = dist[i];
//             x = i;
//         }
//     }
//     visit[x] = true;
//     for(let i = 1; i <= leng; i++){
//         if(dist[i] > dist[x] + graph[x][i]){
//             dist[i] = dist[x] + graph[x][i];
//         }
//     }
// }
// console.log(dist[sne[1]]);


//sol 3
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let V = Number(input[0]);

let graph = Array.from(Array(V + 1), () => Array());
let dist = Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
let visited = Array(V + 1).fill(false);

for (let i = 1; i < input.length - 1; i++) {
    let temp = input[i].split(' ');
    graph[Number(temp[0])].push([Number(temp[1]), Number(temp[2])]);
}



function get_smallest_node() {
    let minval = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 1; i <= V; i++) {
        if (dist[i] < minval && !visited[i]) {
            minval = dist[i];
            index = i;
        }
    }
    return index;
}

function dijkstra(v) {
    dist[v] = 0;
    visited[v] = true;
    for (let j of graph[v]) {
        dist[j[0]] = j[1];
    }
    for (let i = 1; i <= V; i++) {
        let now = get_smallest_node();
        visited[now] = true;
        for (let j of graph[now]) {
            let cost = dist[now] + j[1];
            if (cost < dist[j[0]]) {
                dist[j[0]] = cost;
            }
        }
    }
}

dijkstra(start);

for (let i = 1; i <= V; i++) {
    if (dist[i] == Number.MAX_SAFE_INTEGER) {
        console.log("INF");
    } else {
        console.log(dist[i]);
    }
}