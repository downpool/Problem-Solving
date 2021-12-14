let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let bind = input[0].split(' ');
bind[0] = Number(bind[0]);
bind[1] = Number(bind[1]);
let degree = Array(bind[0] + 1).fill(0);
let ans = [];
let graph = {};
for(let i = 1; i <= bind[0]; i++){
    graph[i] = [];
}
for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    graph[Number(temp[0])].push(Number(temp[1]));
    degree[Number(temp[1])]++;
}

let queue = [];
for(let i = 1; i < degree.length; i++){
    if(degree[i] == 0){
        queue.push(i);
    }
}

let pqueue = [];
while(queue.length){
    let x = queue.shift();
    ans.push(x);
    graph[x].forEach(e => {
        let temp = e;
        degree[temp]--;
        if(degree[temp] == 0){
            pqueue.push(temp);
        }
    })
    pqueue.sort();
    queue.push(...pqueue);
    pqueue = [];
}

console.log(ans.join(' '));