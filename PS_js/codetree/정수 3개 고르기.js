let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let nandm = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number).sort((a, b) => { return a - b; });

let max = -1;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
            let sum = numbers[i] + numbers[j] + numbers[k];
            if (sum > max && sum <= nandm[1]) {
                max = sum;
            }
        }
    }
}
console.log(max);