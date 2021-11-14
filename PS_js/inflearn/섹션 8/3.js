function solution(s) {
    let answer = '';

    function DP(n) {
        if (n > 7) {
            return;
        } else {
            DP(n * 2);
            DP(n * 2 + 1);
            answer += n + ' ';
        }
    }
    DP(s);

    return answer;
}

let array = 1;
console.log(solution(array));