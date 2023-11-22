// let input = [1, 100];
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let first = -1;
let sum = 0;
function isPrime(x) {
    if (x == 1) return false;
    if (x == 2) return true;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    if (isPrime(i)) {
        sum += i;
        if (first == -1) {
            first = i;
        }
    }
}
if (first != -1) {
    console.log(sum);
}
console.log(first);