let input = ['5 4',
'2 1',
'4 3',
'5 1',
'4 2'
]
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;
let temp = input.shift();
let N = Number(temp[0]);
let M = Number(temp[1]);
let compare = Array.from(Array(N + 1), () => Array(N + 1).fill(false));
for (let i = 0; i < input.length; i++) {
    let node = input[i].split(' ');
    compare[Number(node[0])][Number(node[1])] = true;
}
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        for (let k = 1; k <= N; k++) {
            if (compare[j][i] && compare[i][k]) {
                compare[j][k] = true;
            }
        }
    }
}
for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 1; j <= N; j++) {
        if (compare[i][j] || compare[j][i]) count++;
    }
    if (count == N - 2) answer++;
}
// console.log(compare);
console.log(answer);

//2,5 1
//4 2,3

/*
      1 2 3 4 5
    1        
    2 1     
    3       
    4 1 1 1
    5 1


*/