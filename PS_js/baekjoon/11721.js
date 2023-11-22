// let input = "OneTwoThreeFourFiveSixSevenEightNineTen".split("");
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let inputlength = input.length;
for (let i = 0; i < inputlength; i += 10) {
    let array = [];
    for (let j = 0; j < 10; j++) {
        array.push(input.shift());
    }
    console.log(array.join(""));
    array = [];
}