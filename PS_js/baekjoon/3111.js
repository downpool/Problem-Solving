let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let long = input[0].length;
while(true){
    if(input[1].indexOf(input[0])){
        input[1] = input[1].split('').splice(input[1].indexOf(input[0]), long).join('');
    }else{
        break;
    }
    if(input[1].lastIndexOf(input[0])){
        input[1] = input[1].split('').splice(input[1].lastIndexOf(input[0]), long).join('');
    }else{
        break;
    }
}
console.log(input[1]);