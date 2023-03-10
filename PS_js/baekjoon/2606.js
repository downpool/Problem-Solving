let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let parent = Array(n + 1);

function find(a){
    if(a == parent[a]){
        return a;
    }else{
        return parent[a] = find(parent[a]);
    }
}

function union(a, b){
    a = find(a);
    b = find(b);
    if(a != b){
        parent[b] = a;
    }
}

for(let i = 1; i < parent.length; i++){
    parent[i] = i;
}
for(let i = 2; i < input.length; i++){
    let temp = input[i].split(' ');
    union(Number(temp[0]), Number(temp[1]));
    //경로 압축으로 인해 굳이 반대 방향을 추가할 필요가 없음
}
let ans = 0;
for(let i = 2; i <= n; i++){
    if(find(1) == find(i)){
        ans++;
    }
}
console.log(ans);