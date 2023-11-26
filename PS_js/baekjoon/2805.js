// let input = ['5 20',
// '4 42 40 26 46']
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let temp = input[0].split(' ');
let want = Number(temp[1])
let trees = input[1].split(' ');
function cut(arr, h){
    let ans = 0;
    for(let i of arr){
        if(i > h){
            ans += i - h;
        }
    }
    return ans >= want;
}
for(let i = 0; i < trees.length; i++){
    trees[i] = Number(trees[i]);
}
let min = 0, max = Math.max(...trees);
let ans = min;

while(min <= max){
    let mid = Math.floor((min + max) / 2);
    if(cut(trees, mid)){
        if(ans < mid){
            ans = mid;
        }
        min = mid + 1;
    }else{
        max = mid - 1;
    }
}
console.log(ans);