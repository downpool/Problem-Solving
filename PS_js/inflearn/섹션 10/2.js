function solution(n) {
    let ans = 0;

    function DP(n){
        if(n <= 0){
            ans++;
            return;
        }else{
            DP(n - 1);
            DP(n - 2);
        }
    }
    DP(n);
    return ans;
}
let arr = 7;
console.log(solution(arr));