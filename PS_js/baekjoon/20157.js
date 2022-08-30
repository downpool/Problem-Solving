let input = ['5',
    '8 16',
    '10 -3',
    '2 4',
    '7 10',
    '1 2'
]
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let plusArrayToMaps = {};
let minusArrayToMaps = {};
let yline = [0, 0, 0, 0];
for (let i = 1; i < input.length; i++) {
    let temp = input[i].split(' ');
    let a = Number(temp[0]);
    let b = Number(temp[1]);
    if (b != 0 && a != 0) {
        if(a > 0){
            if (plusArrayToMaps[a / b] != 0 && plusArrayToMaps[a / b] != null) {
                plusArrayToMaps[a / b]++;
            } else {
                plusArrayToMaps[a / b] = 1;
            }
        }else{
            if (minusArrayToMaps[a / b] != 0 && minusArrayToMaps[a / b] != null) {
                minusArrayToMaps[a / b]++;
            } else {
                minusArrayToMaps[a / b] = 1;
            }
        }
    } else {
        if (a > 0) {
            yline[0]++;
        } else if (a < 0) {
            yline[1]++;
        } else if (b > 0) {
            yline[2]++;
        } else {
            yline[3]++;
        }
    }
}
console.log(Math.max(...Object.values(plusArrayToMaps), ...Object.values(minusArrayToMaps), ...yline));