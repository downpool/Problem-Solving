function solution(s) {
    let answer = '';

    function DP(n) {
        if (n > 7) {
            return;
        } else {
            answer += n + ' ';
            DP(n * 2);
            DP(n * 2 + 1);
        }
    }
    DP(s);

    return answer;
}

let array = 1;
console.log(solution(array));