let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let bind = Number(input[0]);
let degree = Array(bind + 1).fill(0);
//중요
let d = Array(bind + 1).fill(Number.MIN_SAFE_INTEGER);
let cost = Array(bind + 1);
let graph = {};
for (let i = 1; i <= bind; i++) {
    graph[i] = [];
}
for (let i = 1; i <= bind; i++) {
    let temp = input[i].split(' ');
    temp.splice(1, 1);
    cost[i] = Number(temp[0]);
    for (let j = 1; j < temp.length; j++) {
        graph[Number(temp[j])].push(i);
        degree[i]++;
    }
}

let queue = [];
for (let i = 1; i <= bind; i++) {
    if (degree[i] == 0) {
        queue.push(i);
        d[i] = cost[i];
    }
}

while (queue.length) {
    let x = queue.shift();
    graph[x].forEach(e => {
        let temp = e;
        degree[temp]--;
        if (d[temp] < d[x] + cost[temp]) {
            d[temp] = d[x] + cost[temp];
        }
        if (degree[temp] == 0) {
            queue.push(temp);
        }
    })
}
let ans = 0;
for (let i = 1; i <= bind; i++) {
    if (ans < d[i]) {
        ans = d[i];
    }
}
console.log(ans);