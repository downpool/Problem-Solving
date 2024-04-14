let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let temp = input[0].split(' ');
let v = Number(temp[0]);
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(-1));
let start = Number(input[1]);
for (let i = 2; i < input.length; i++){
    temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    temp[2] = Number(temp[2]);
    graph[temp[0]][temp[1]] = temp[2];
    graph[temp[1]][temp[0]] = temp[2];
}
function dijkstra(start, visited, end) {
    let dist = Array(visited.length).fill(1000000000);
    visited[start] = true;
    let queue = [start];
    while (queue.length) {
        let node = queue.shift();
        graph[node].forEach(i => {
            if (!visited[i]) {
                if (dist[i] >= dist[node] + graph[node][i]) {
                    dist[i] = dist[node] + graph[node][i];
                }
                queue.push(i);
                visited[i] = true;
            }
        })
        if (i == end) {
            break;
        }
    }
    return dist;
}
for (let i = 1; i <= n; i++) {
    let visited = Array(n + 1).fill(false);
    visited[0] = true;
    let ans = dijkstra(start, visited, i);
    if (ans == 1000000000) {
        console.log('INF');
    } else if (ans == 0 || start == i) {
        console.log(0);
    } else {
        console.log(ans);
    }
    
}