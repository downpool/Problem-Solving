let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
input.shift();
let next = Array(101);
let dist = Array(101).fill(-1);
for(let i = 1; i <= 100; i++){
    next[i] = i;
}
for(let i of input){
    let temp = i.split(' ');
    next[Number(temp[0])] = Number(temp[1]);
}
dist[1] = 0;

let queue = [];
queue.push(1);

while(queue.length != 0){
    let x = queue.shift();
    for(let i = 1; i <= 6; i++){
        let y = x + i;
        if(y > 100) continue;
        y = next[y];
        if(dist[y] == -1){
            dist[y] = dist[x] + 1;
            queue.push(y);
        }
    }
}
console.log(dist[100]);