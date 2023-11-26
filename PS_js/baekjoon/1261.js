let input = ['6 6',
    '001111',
    '010000',
    '001111',
    '110001',
    '011010',
    '100010'
]
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let size = input[0].split(' ');
let temp = size[1];
size[1] = Number(size[0]);
size[0] = Number(temp);
let arr = [];
let movex = [0, 0, 1, -1];
let movey = [1, -1, 0, 0];
for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(''));
}
let graph = Array.from(Array(size[0]), () => Array(size[1]).fill(-1));
let queue = [[0, 0]];
let queue_next = [];
graph[0][0] = 0;

while (queue.length) {
    let node = queue.shift();
    let x = node[0];
    let y = node[1];

    for (let i = 0; i < 4; i++) {
        let nx = x + movex[i];
        let ny = y + movey[i];
        if (0 <= nx && nx < size[0] && 0 <= ny && ny < size[1]) {
            if (graph[nx][ny] == -1) {
                if (arr[nx][ny] == 0) {
                    graph[nx][ny] = graph[x][y];
                    queue.push([nx, ny]);
                } else {
                    graph[nx][ny] = graph[x][y] + 1;
                    queue_next.push([nx, ny]);
                }
            }
        }
    }
    if (!queue.length) {
        queue = queue_next;
        queue_next = Array();
    }
}
console.log(graph[size[0] - 1][size[1] - 1]);