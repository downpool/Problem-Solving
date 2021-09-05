let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[0];
let inp = [];
for(let c = 1; c <= fir; c++){
    inp.push(Number(input[c]));
}
//메모이제이션 기법 필요
function solution(n) {
    let answer = 0;

    function DP(l, cnt) {
        if(cnt > n){
            return;
        }
        if (cnt === n) {
            answer++;
            return;

        } else {
            DP(l + 1, cnt + 1);
            DP(l + 1, cnt + 2);
            DP(l + 1, cnt + 3);
        }
    }
    DP(0, 0);
    return answer % 1000000009;
}

for(let i = 0; i < inp.length; i++){
    console.log(solution(inp[i]));
}