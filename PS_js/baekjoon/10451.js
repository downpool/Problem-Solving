// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


// let tsize = Number(input.shift());

// function bfs(g, v, visit) {
//     let queue = [v];
//     visit[v] = true;
// }

// function checkCycle(size, graph) {
//     let visited = Array(size + 1).fill(false);
//     visited[0] = true;
//     for (let i = 0; i < size; i++) {
//         if (!visited[i]) {
//             bfs(graph, i, visited);
//         } else {

//         }
//     }
// }

// for (let i = 0; i < tsize; i++) {
//     let graph = {};
//     input.shift();
// }
// let input = ["2",
//     "8",
//     "3 2 7 8 1 4 5 6",
//     "10",
//     "2 1 3 4 5 6 7 9 10 8"]
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let tsize = Number(input.shift());
for (let i = 0; i < tsize; i++) {
    let arrsize = Number(input.shift());
    let arr = input.shift().split(' ').map(Number);
    arr.unshift(0);
    let graph = Array.from(Array(arrsize + 1), () => Array());
    for (let j = 1; j <= arrsize; j++) {
        graph[j].push(arr[j]);
    }
    var count = 0;
    let visited = Array(arrsize + 1).fill(false);
    visited[0] = true;

    for (let j = 1; j <= arrsize; j++) {
        if (!visited[j]) {
            bfs(graph, j, visited);
        }
    }
    console.log(count);
}

function bfs(graph, v, visited) {
    let queue = [v];
    visited[v] = true;
    count++;
    while (queue.length) {
        let node = queue.shift();
        graph[node].forEach(e => {
            if (!visited[e]) {
                visited[e] = true;
                queue.push(e);
            }
        })
    }
}
