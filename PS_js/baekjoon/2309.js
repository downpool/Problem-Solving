let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = -100;
for(let i = 0; i < input.length; i++){
    input[i] = Number(input[i]);
    sum += input[i];
}
input = input.sort((a, b) => {return a - b});
for(let i = 0; i < input.length; i++){
    let temp = sum - input[i];
    if(input.includes(temp)){
        input.splice(i, 1);
        input.splice((input.indexOf(temp)), 1);
        break;
    }
}
for(let i of input){
    console.log(i);
}