function solution(s) {
    function DP(l){
        if(l <= 0){
            return;
        }else{
            DP(l - 1);
            console.log(l);
        }
    }
    DP(s);
}

solution(3);
// let arr = [];
// console.log(solution(8));