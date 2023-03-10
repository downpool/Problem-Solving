let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let ans = 0;
let parent = Array(n + 1);
let sorting = Array.from(Array(), () => Array(3));
let graph = {};
for (let i = 1; i <= n; i++) {
    graph[i] = [];
    parent[i] = i;
}

for (let i = 2; i < input.length; i++) {
    let temp = input[i].split(' ');
    temp[0] = Number(temp[0]);
    temp[1] = Number(temp[1]);
    temp[2] = Number(temp[2]);
    //일치 하는 경우 무시하는 과정 중요
    if(temp[1] == temp[0]) continue;
    graph[temp[0]].push([temp[1], temp[2]]);
    sorting.push([temp[2], temp[0], temp[1]]);
}

function find(a) {
    if (a == parent[a]) {
        return a;
    } else {
        return parent[a] = find(parent[a]);
    }
}

function union(a, b) {
    a = find(a);
    b = find(b);
    parent[b] = a;
}
sorting.sort((a, b) => {
    if(a[0] != b[0]){
        return a[0] - b[0];
    }else{
        return a[1] - b[1];
    }
});

for(let i = 0; i < sorting.length; i++){
    let x = find(sorting[i][1]);
    let y = find(sorting[i][2]);
    if(x != y){
        union(x, y);
        ans += sorting[i][0];
    }
}
console.log(ans);