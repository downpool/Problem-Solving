function solution(a, b) {
    let answer = 0;
    
    function DP(n, r){
        if(n == r || r == 0){
            return 1;
        }else{
            return DP(n - 1, r - 1) + DP(n - 1, r);
        }
    }
    answer = DP(a, b);

    return answer;
}


function solution2(n, r) {
    let answer = 0;
    let dy = Array.from(Array(n + 2), () => Array(r + 2).fill(0));
    function DP(n, r){
        if(dy[n][r] > 0) return dy[n][r];
        if(n == r || r == 0){
            return 1;
        }else{
            return dy[n][r] = DP(n - 1, r - 1) + DP(n - 1, r);
        }
    }
    answer = DP(n, r);

    return answer;
}

let a = 33;
let b = 19;
console.log(solution2(a, b));