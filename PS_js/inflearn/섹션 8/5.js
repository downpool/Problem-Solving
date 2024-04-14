function solution(s) {
    let answer = 'NO';
    let total = s.reduce((a, b) => a + b, 0);
    let n = s.length;
    function DP(l, sum){
        if(l === n){
            if((total - sum) === sum) {
                answer = 'YES'
                return;
            }
        }else{
            DP(l + 1, sum + s[l]);
            DP(l + 1, sum);
        }
    }
    DP(0, 0);
    return answer;
}


let array = [1, 3, 5, 6, 7, 10];
console.log(solution(array));