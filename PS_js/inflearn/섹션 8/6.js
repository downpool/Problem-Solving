function solution(max, ar) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = ar.length;
    function DP(l, sum){
        if(sum > max) return;
        if(l === n){
            answer = Math.max(answer, sum);
        }else{
            DP(l + 1, sum + ar[l]);
            DP(l + 1, sum);
        }
    }

    DP(0, 0);
    return answer;
}


let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));