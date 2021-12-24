let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
function dp(d){
    let ar = Array.from(Array(2), () => Array(d[0].length).fill(0));
    ar[0][1] = d[0][1];
    ar[1][1] = d[1][1];
    for(let i = 2; i <= d[0].length; i++){
        ar[0][i] = Math.max(ar[1][i - 1], ar[1][i - 2] + d[0][i]);
        ar[1][i] = Math.max(ar[0][i - 1], ar[0][i - 2] + d[1][i]);
    }
    return Math.max(ar[0][d[0].length], ar[1][d[1].length]);
}
for(let i = 0; i < Number(input[0]); i++){
    let temp = i * 3 + 1;
    let arr = Array(2);
    arr[0] = input[temp + 1].split(' ');
    arr[1] = input[temp + 2].split(' ');
    for(let i = 0; i < arr[0].length; i++){
        arr[0][i] = Number(arr[0][i]);
        arr[1][i] = Number(arr[1][i]);
    }
    console.log(dp(arr));
}