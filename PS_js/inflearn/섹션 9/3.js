function solution(n, ar) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let visit = Array(n + 1).fill(false);
    let stack = [];
    for(let [a, b] of ar){
        graph[a].push(b);
    }
    function DFS(v){
        if(v == n){
            answer++;
            console.log(stack);
        }else{
            for(let i of graph[v]){
                if(!visit[i]){
                    stack.push(i);
                    visit[i] = true;
                    DFS(i);
                    visit[i] = false;
                    stack.pop();
                }
            }
        }
    }
    visit[1] = true;
    stack.push(1);
    DFS(1);

    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));