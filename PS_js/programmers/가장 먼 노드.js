function solution(n, edge) {
    let answer = 0;
    let graph = {};
    for(let i = 1; i <= n; i++){
        graph[i] = [];
    }
    for(let i of edge){
        graph[i[0]].push(i[1]);
        graph[i[1]].push(i[0]);
    }
    let queue = [1];
    let leng = Array(n + 1).fill(-1);
    leng[1] = 0;
    while(queue.length){
        let node = queue.shift();
        graph[node].forEach((e) => {
            if(leng[e] == -1 || leng[e] > leng[node] + 1){
                leng[e] = leng[node] + 1;
                queue.push(e);
            }
        })
    }
    let max = Math.max(...leng);
    for(let i = 1; i <= n; i++){
        if(leng[i] == max) answer++;
    }
    return answer;
}