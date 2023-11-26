// let input = ['9 5 3',
// '1 3',
// '4 3',
// '5 4',
// '5 6',
// '6 7',
// '2 3',
// '9 6',
// '6 8',
// '5',
// '4',
// '8'];
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let NRQ = input[0].split(' ');
let N = Number(NRQ[0]);
let R = Number(NRQ[1]);
let Q = Number(NRQ[2]);

let graph = Array.from(Array(N + 1), () => []);
for (let i = 1; i < N; i++) {
    let temp = input[i].split(' ');
    let U = Number(temp[0]);
    let V = Number(temp[1]);
    graph[U].push(V);
    graph[V].push(U);
}

let tree = Array.from(Array(N + 1), () => []);
let parentTree = Array(N + 1).fill(0);
parentTree[R] = -1;

function makeTree(currentNode, parent) {
    graph[currentNode].forEach(e => {
        if (e != parent) {
            tree[currentNode].push(e);
            parentTree[e] = currentNode;
            makeTree(e, currentNode);
        }
    });
}
makeTree(R, -1);

let size = Array(N + 1).fill(0);

function countSubtreeNodes(currentNode) {
    size[currentNode] = 1;
    tree[currentNode].forEach(e => {
        countSubtreeNodes(e);
        size[currentNode] += size[e];
    });
}

countSubtreeNodes(R);

for(let i = N; i < N + Q; i++){
    console.log(size[Number(input[i])]);
}