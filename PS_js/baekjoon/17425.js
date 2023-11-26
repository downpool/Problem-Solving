let input = ['5',
    '1',
    '2',
    '10',
    '70',
    '10000',
    '100000'].map(Number);
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let primes = Array(100001).fill(0);
let sums = Array(100001).fill(0);

for (let i = 1; i <= 100000; i++) {
    for (let j = 1; j <= 100000 / i; j++) {
        // count[i * j]++;
        primes[i * j] += i;
    }
    sums[i] = sums[i - 1] + primes[i];
}

for (let k = 1; k < input.length; k++) {
    console.log(sums[input[k]]);
}
