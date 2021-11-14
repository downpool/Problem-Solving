let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

let node = Array(input[0] + 1).fill(false);
let semi = [];
let graph = Array.from(Array(input[0] + 1), () => Array(input[0] + 1).fill(0));
for(let i = 2; i < input.length; i++){
    let temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    temp[2] = Number(temp[2]);
    semi.push(temp);
}
semi.sort((a, b) => {
    if(a[2] != b[2]){
        return a[2] - b[2];
    }else{
        return a > b;
    }
});
let answer = 0;
for(let i of semi){
    node[i[0]] = true;
    node[i[1]] = true;
}