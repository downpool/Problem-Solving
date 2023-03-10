//readline 사용해야됨

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let v = input[0].split(' ');
let parent = Array(Number(v[0]) + 1);
let rank = Array(Number(v[0]) + 1);
for(let i = 0; i < parent.length; i++){
    parent[i] = i;
    rank[i] = 0;
}
//경로 압축
function find2(x){
    if(x == parent[x]){
        return x;
    }else{
        return parent[x] = find2(parent[x]);
    }
}

//union-find used rank
function unionfind(a, b){
    a = find2(a);
    b = find2(b);
    if (a == b) return;
    if(rank[a] < rank[b]){
        let temp = a;
        a = b;
        b = temp;
    }
    parent[b] = a;
    if(rank[a] == rank[b]){
        rank[a] = rank[b] + 1;
    }
}

for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    if(temp[0] == '0'){
        unionfind(Number(temp[1]), Number(temp[2]));
    }else{
        temp[1] = find2(Number(temp[1]));
        temp[2] = find2(Number(temp[2]));
        if(temp[1] == temp[2]){
            console.log('YES');
        }else{
            console.log('NO');
        }
    }
}