let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let tree = {};
let input2 = input.slice(1);
for (let i of input2) {
    let temp = i.split(' ');
    tree[temp[0]] = [temp[1], temp[2]];
}

function pre(root) {
    let l = tree[root];
    ans.push(root);
    if(l[0] != '.'){
        pre(l[0]);
    }
    if(l[1] != '.'){
        pre(l[1]);
    }
}

function inO(root) {
    let l = tree[root];
    if(l[0] != '.'){
        inO(l[0]);
    }
    ans2.push(root);
    if(l[1] != '.'){
        inO(l[1]);
    }
}

function pos(root) {
    let l = tree[root];
    if(l[0] != '.'){
        pos(l[0]);
    }
    if(l[1] != '.'){
        pos(l[1]);
    }
    ans3.push(root);
}
let ans = [];
let ans2 = [];
let ans3 = [];
pre('A');
inO('A');
pos('A');
console.log(ans.join(''));
console.log(ans2.join(''));
console.log(ans3.join(''));