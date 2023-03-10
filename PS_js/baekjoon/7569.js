let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['6 4',
// '0 -1 0 0 0 0',
// '-1 0 0 0 0 0',
// '0 0 0 0 0 0',
// '0 0 0 0 0 1']
let temp = input[0].split(' ');
let box = Array.from(Array(Number(temp[1])), () => Array(Number(temp[0])));
let dist = Array.from(Array(Number(temp[1])), () => Array(Number(temp[0])).fill(-1));
let movex = [0, 1, 0, -1];
let movey = [1, 0, -1, 0];
let queue = [];
for (let i = 0; i < Number(temp[1]); i++) {
    let tempp = input[i + 1].split(' ');
    for (let j = 0; j < Number(temp[0]); j++) {
        box[i][j] = Number(tempp[j]);
        if (tempp[j] == 1) {
            dist[i][j] = 0;
            queue.push([i, j]);
        }
    }
}
while (queue.length) {
    let node = queue.shift();
    let x = node[0];
    let y = node[1];
    for (let k = 0; k < 4; k++) {
        let nx = x + movex[k];
        let ny = y + movey[k];
        if (0 <= nx && nx < Number(temp[1]) && 0 <= ny && ny < Number(temp[0])) {
            if (box[nx][ny] == 0 && dist[nx][ny] == -1) {
                queue.push([nx, ny]);
                dist[nx][ny] = dist[x][y] + 1;
            }
        }
    }
}