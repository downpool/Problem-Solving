let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input[0] = Number(input[0]);
let inp = input[1].split(' ');
let dist = Array.from(Array(200), () => Array(200).fill(-1))
let movex = [-2, -2, 0, 0, 2, 2];
let movey = [-1, 1, -2, 2, -1, 1];
for(let i = 0; i < inp.length; i++){
    inp[i] = Number(inp[i]);
}
dist[inp[0]][inp[1]] = 0;
let queue = [[inp[0], inp[1]]];
while(queue.length){
    let temp = queue.shift();
    for(let i = 0; i < 6; i++){
        let nx = temp[0] + movex[i];
        let ny = temp[1] + movey[i];
        if(0 <= nx && nx < input[0] && 0 <= ny && input[0]){
            if(dist[nx][ny] == -1){
                queue.push([nx, ny]);
                dist[nx][ny] = dist[temp[0]][temp[1]] + 1;
            }
        }
        if(nx == inp[2] && ny == inp[3]) break;
    }
}
console.log(dist[inp[2]][inp[3]]);