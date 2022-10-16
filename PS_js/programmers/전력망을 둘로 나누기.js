function solution(n, wires) {
    let answer = 0;
    let min = n;
    let graph = {};
    for(let [a, b] of wires){
        graph[a].push(b);
        graph[b].push(a);
    }
    function parents(p, node, g){
        
    }
    function bfs(c1, c2){

    }

    return answer;
}