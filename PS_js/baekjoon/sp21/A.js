let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = Number(input[0]);

function solution(n) {
    let answer = '';
    let arr = Array.from(Array(n), () => Array(n).fill(' '));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == n - 1 || j == n - 1) arr[i][j] = '*';
            if(i == j) arr[i][j] = '*';
            if(i + j == n - 1) arr[i][j] = '*'
        }
    }
    for(let k = 0; k < n; k++){
        answer += arr[k].join('');
        answer += '\n';
    }

    return answer;
}
console.log(solution(fir));