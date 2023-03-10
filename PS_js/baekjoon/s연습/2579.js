let input = ['6',
'10',
'20',
'15',
'25',
'10',
'20'
];
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
}
let dp = Array(301);
dp[0] = input[0];
dp[1] = Math.max(input[1], input[0] + input[1]);
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for(let i = 3; i < input.length; i++){
    dp[i] = Math.max(input[i] + dp[i - 2], input[i] + input[i - 1] + dp[i - 3]);
}

console.log(dp[input.length - 1]);