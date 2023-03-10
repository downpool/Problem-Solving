function solution(n) {
    let answer = '';
    function DP(l){
        if(l == 0) return;
        else{
            DP(parseInt(l / 2));
            answer += String(l % 2);
        }
    }
    DP(n);
    return answer;
}


// let arr = [];
console.log(solution(11));