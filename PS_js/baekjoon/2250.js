// let input = ['19',
// '1 2 3',
// '2 4 5',
// '3 6 7',
// '4 8 -1',
// '5 9 10',
// '6 11 12',
// '7 13 -1',
// '8 -1 -1',
// '9 14 15',
// '10 -1 -1',
// '11 16 -1',
// '12 -1 -1',
// '13 17 -1',
// '14 -1 -1',
// '15 18 -1',
// '16 -1 -1',
// '17 -1 19',
// '18 -1 -1',
// '19 -1 -1']
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let nodeSize = Number(input[0]);
let node = Array.from(Array(nodeSize + 1), () => Array(4).fill(-1));
let root = Array(nodeSize + 1).fill(true);
root[0] = false;
for(let i = 1; i < input.length; i++){
    let temp = input[i].split(" ");
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    temp[2] = Number(temp[2]);
    if(temp[1] != -1) root[temp[1]] = false;
    if(temp[2] != -1) root[temp[2]] = false;
    node[temp[0]][0] = temp[1];
    node[temp[0]][1] = temp[2];
}

let count = 1;
let maxd = 1;
function inorder(n, deg){
    if(n == -1) return;
    inorder(node[n][0], deg + 1);
    //
    node[n][2] = deg;
    maxd = maxd < deg ? deg : maxd;
    node[n][3] = count++;
    inorder(node[n][1], deg + 1);
}

inorder(root.indexOf(true), 1);
let minl = Array(maxd + 1).fill(nodeSize + 1);
let maxl = Array(maxd + 1).fill(-1);

let gap = -1, gapIdx = -1;

for(let i = 1; i <= nodeSize; i++){
    for(let j = 1; j <= maxd; j++){
        if(node[i][2] == j){
            if(minl[j] > node[i][3]){
                minl[j] = node[i][3];
            }
            if(maxl[j] < node[i][3]){
                maxl[j] = node[i][3];
            }
        }
    }
}
for(let i = 1; i <= maxd; i++){
    if(gap < (maxl[i] - minl[i] + 1)){
        gap = maxl[i] - minl[i] + 1;
        gapIdx = i;
    }
}
console.log(gapIdx + " " + gap);