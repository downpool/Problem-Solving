let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let tempA = input[1].split(' ');
let tempB = input[3].split(' ');

function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

