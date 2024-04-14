let input = [1, 1000];
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let count = 0;
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

function isAlmost(y) {
    let sqrts = Math.sqrt(y);

    if (!isPrime(sqrts)) {
        return true;
    } else {
        return false;
    }
}

for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    if (isAlmost(i)) {
        count++;
    }
}
console.log(count);