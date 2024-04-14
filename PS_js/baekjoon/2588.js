const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num = [];
rl.on("line", (line) => {
    num.push(line);
    if (num.length >= 2) {
        rl.close();
    }
});
rl.on('close', () => {
    calc(num);
    rl.close();
})

function calc(num) {
    let staticNum = Number(num[0]);
    let ns = num[1].split("").map(Number);

    console.log(staticNum * ns[2]);
    console.log(staticNum * ns[1]);
    console.log(staticNum * ns[0]);
    console.log(staticNum * Number(num[1]));
}