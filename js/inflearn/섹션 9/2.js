function solution(n, ar) {
    let answer = 0;

    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let path = [];
    let visit = Array(n + 1).fill(false);
    for(let [a, b] of ar){
        graph[a][b] = 1;
    }
    function DFS(v){
        if(v == n){
            answer++;
            console.log(path);
        }else{
            for(let i = 1; i <= n; i++){
                if(graph[v][i] == 1 && visit[i] == false){
                    visit[i] = true;
                    path.push(i);
                    DFS(i);
                    visit[i] = false;
                    path.pop();
                }
            }
        }
    }
    
    path.push(1);
    visit[1] = 1;
    DFS(1);
    
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));