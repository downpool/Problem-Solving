function solution(n, m) {
    let answer = Number.MAX_SAFE_INTEGER;
    
    function DFS(l, sum){
        if(sum > m) return;
        if(sum === m){
            answer = Math.min(answer, l);
        }else{
            for(let i = 0; i < n.length; i++){
                DFS(l + 1, sum + n[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
}


let arr = [1, 2, 5];
console.log(solution(arr, 15));