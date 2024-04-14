let input = ['5 6',
    '1',
    '5 1 1',
    '1 2 2',
    '1 3 3',
    '2 3 4',
    '2 4 5',
    '3 4 6'
];
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let vande = input[0].split(' ');
let V = Number(vande[0]);
let start = Number(input[1]);

let graph = Array.from(Array(V + 1), () => Array());
let dist = Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
let visited = Array(V + 1).fill(false);

for (let i = 2; i < input.length; i++) {
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