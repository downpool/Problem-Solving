let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let memo = [[1, 0], [0, 1]];

function fibo(n) {
    if (n < memo.length) {
        return memo[n];
    }
    for (let i = memo.length; i <= n; i++) {
        memo.push([memo[i - 1][0] + memo[i - 2][0], memo[i - 1][1] + memo[i - 2][1]]);
    }
    return memo[n];
}

for (let i = 1; i < input.length; i++) {
    const n = Number(input[i]);
    if (n == 0) {
        console.log('1 0');
    } else {
        const [zero, one] = fibo(n);
        console.log(zero + " " + one);
    }
}
