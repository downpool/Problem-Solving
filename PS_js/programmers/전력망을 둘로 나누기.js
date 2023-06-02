function solution(n, wires) {
    let answer = -1;
    
    let trees = Array.from(Array(n + 1), () => Array());
    for(let [a, b] of wires){
        trees[a].push(b);
        trees[b].push(a);
    }
    
    for(let i = 1; i <= n; i++){
        trees[i].push(i);
        trees[i].sort((a, b) => {return a - b;})
    }
    let bfsArray = Array.from(Array(n + 1), () => Array());
    
    function bfs(v) {
        let queue = [v];
        visited[v] = true;
        bfsArray[v].push(v);
        while(queue.length) {
            let node = queue.shift();
            trees[node].forEach(e => {
                if(!visited[e]) {
                    queue.push(e);
                    visited[e] = true;
                    bfsArray[v].push(e);
                }
            });
        }
    }
    
    for(let i = 1; i <= n; i++){
        let visited = Array(n + 1).fill(false);
        visited[0] = true;
        bfs(i)
    }
    
    let lengCount = Array(n + 1).fill(0);
    for(let i = 1; i <= n; i++){
        lengCount[i] = trees[i].length;
    }
    
    console.log(trees);
    
    return answer;
}