const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let lines = line.split(' ').map(Number);

    console.log(lines[0] + lines[1] + lines[2]);
    rl.close();
});
rl.on('close', () => {

})