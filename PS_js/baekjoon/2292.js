// let input = 60;
let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'));
let sixs = 1;
let count = 1;
while (1) {
    if (sixs < input) {
        sixs += 6 * count;
        count++;
    } else {
        break;
    }
}
console.log(count);