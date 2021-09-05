function solution(n, m) {
    let answer = [];
    let temp = Array.from({length : m}, () => 0);
    function DFS(l){
        if(l === m){
            answer.push(temp.slice());
        }else{
            for(let i = 1; i <= n; i++){
                temp[l] = i;
                DFS(l + 1);
            }
        }
    }
    DFS(0);
    return answer;
}


let arr = solution(3, 2);
console.log(solution(3, 2));
for(let i of arr){
    console.log(i[0], i[1]);
};