function solution(s) {
    let answer = [];
    let ch = new Array(s + 1);
    ch.fill(0);

    function DP(n) {
        if (n === s + 1) {
            let temp = '';
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) temp += i + ' ';
            }
            if(temp.length > 0) answer.push(temp.trim());
        } else {
            ch[n] = 1;
            DP(n + 1);
            ch[n] = 0;
            DP(n + 1);
        }
    }
    DP(1);

    return answer;
}


let array = 3;
console.log(solution(array));