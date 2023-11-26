// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let N = Number(input[0]);
// let root = -1;
// let temp = input[1].split(' ');
// let arr = Array.from(Array(N), () => Array(3));
// for (let i = 0; i < N; i++) {
//     temp[i] = Number(temp[i]);
//     arr[i][0] = temp[i];
//     arr[i][1] = i;
//     arr[i][2] = 0;
//     if (temp[i] == -1) {
//         root = i;
//         arr[i][0] = -2;
//     }
// }
// for (let i = 0; i < N; i++){
//     for (let j = 0; j < N; j++){
//         if (arr[i][0] == arr[j][1]) {
//             arr[i][2]++;
//         }
//     }
// }

// let num = Number(input[2]);

// let queue = [num];
// while (queue.length) {
//     let node = queue.shift();
//     for (let i = 0; i < arr[node][2]; i++){

//     }
// }
// let count = 0;
// for (let i = 0; i < N; i++){
//     if (arr[i][2] == 1) {
//         count++;
//     }
// }
// console.log(count);

// // 0 -2 0 0 2 2 -2 -2 -2 -2
// // 1  0 1 2 3 -2 5 6 7 8
// // 4  
// //    0
// //  1   2
// //     3   -2
// //      -2   -2
// //        -2   -2

// let input = ['9', '-1 0 0 2 2 4 4 6 6', '4'];

// // let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let N = Number(input[0]);
// let tree = Array.from(Array(N), () => Array(N).fill(-2));
// let temp = input[1].split(' ');
// let root = -1;
// for (let i = 0; i < N; i++){
//     let bran = Number(temp[i]);
//     if (bran == -1) {
//         root = i;
//         continue;
//     }
//     tree[bran][i] = 1;
// }
// let cut = Number(input[2]);
// let queue = [cut];
// while (queue.length) {
//     let node = queue.shift();
//     for (let i = 0; i < N; i++){
//         if (tree[node][i] == 1) {
//             tree[node][i] = 0;
//             queue.push(i);
//         }
//     }
// }

// let count = 0;
// for (let i = 0; i < N; i++){
//     let cc = 0;
//     for (let j = 0; j < N; j++){
//         if (tree[i][j] == 1) {
//             cc++;
//         }
//     }
//     if (cc == 2 || cc == 0) count++;
// }
// console.log(count);

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['9', '-1 0 0 2 2 4 4 6 6', '4'];
let N = Number(input[0]);
let tree = Array.from(Array(N), () => Array(3).fill(0));
tree[0][0] = Number(values[0]);
for(let i = 1; i < N; i++){
    tree[i][0] = Number(values[i]);
    tree[Number(values[i])][1]++;
}
let count = 0;
let eraseNode = Number(input[2]);
for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(tree[j][0] == -2){

        }
    }
}
console.log(count);