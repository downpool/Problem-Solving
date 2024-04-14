function solution(n) {
    let answer = 1;
    
    function DP(l){
        if(l == 1){
            return 1;
        }else{
            return l * DP(l - 1);
        }
    }
    answer = DP(n);

    return answer;
}


let arr = 5;
console.log(solution(5));