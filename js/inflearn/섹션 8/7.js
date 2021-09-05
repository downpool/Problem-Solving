function solution(t, arr) {
    let answer = 0;
    function DP(l, sum, time){
        if(l === arr.length){
            if(time <= t) {
                answer = Math.max(answer, sum);   
            }
        }else{
            DP(l + 1, sum + arr[l][0], time + arr[l][1]);
            DP(l + 1, sum, time);
        }
    }
    DP(0, 0, 0);
    return answer;
}


let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));