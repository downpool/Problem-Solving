let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(1);
for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
}

function solve(a) {
    let ans = [];
    let n = a.length;
    let stack = [];
    let m = 0;
    for (let x of a) {
        if (x > m) {
            while (x > m) {
                stack.push(++m);
                ans.push("+");
            }
            stack.pop();
            ans.push("-");
        } else {
            if (stack[stack.length - 1] != x) {
                console.log("NO");
                return;
            }
            stack.pop();
            ans.push("-");
        }
    }
    console.log(ans.join("\n"));
}
solve(input);