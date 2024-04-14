let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let ans = 0;
for(let i = 0; i < input.length; i++){
    if(Number(input[i]) < 40){
        ans += 40;
    }else{
        ans += Number(input[i]);
    }
}
console.log(ans / 5);