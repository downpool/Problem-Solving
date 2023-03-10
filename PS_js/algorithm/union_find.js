//a -> b
function union(a, b){
    a = find(a);
    b = find(b);
    parent[b] = a;
}

//default
function find(x){
    if(x == parent[x]){
        return x;
    }else{
        return find(parent[x]);
    }
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