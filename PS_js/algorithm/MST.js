function Prim(){
    //인접 행렬
    let n = 7;
    let graph = Array.from(Array(n), () => Array(n));
    //1번부터 인덱스를 사용하기 위해서
    let visited = Array(n + 1).fill(false);
    let dist = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    let result = 0;
    dist[0] = 0;
    let cnt = 0;
    while(true){
        let min = Number.MAX_SAFE_INTEGER;
        let idx = 0;
        for(let i = 1; i <= n; i++){
            if(!visited[i] && dist[i] < min){
                idx = i;
                min = dist[i];
            }
        }
        visited[idx] = true;
        result += min;
        cnt++;
        
        if(cnt == n) break;
        for(let i = 0; i < n; i++){
            if(!visited[i] && graph[idx][i] > 0 && dist[i] > graph[idx][i]){
                dist[i] = graph[idx][i];
            }
        }
    }

    console.log(result);
}



function Kruskal(){
    //인접 행렬
    //가중치의 오름차순으로 정렬하고
    //그 간선을 적용했을때의 union-find 연산함
    //또한 스패닝 트리의 간선의 수가 V - 1이면
    //종료.
    //쉽잖아..?
}