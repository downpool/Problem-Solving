let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let numberArray = input[1].split(" ");
let endSum = Array(numberArray.length + 1).fill(0);

for(let i = 1; i <= numberArray.length; i++){
    endSum[i] = endSum[i - 1] + Number(numberArray[i - 1]);
}

for(let i = 2; i <= numberArray.length; i++){
    endSum[i] -= endSum[i - 1]
}

for(let i = 2; i < input.length; i++){
    let [a, b] = input[i].split(" ").map(Number);
    console.log(endSum[b] - endSum[a - 1]);
}