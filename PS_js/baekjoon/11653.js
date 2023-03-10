let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = Number(input);
if(input != 1){
    for(let i = 2; i <= input; i++){
        if(input % i == 0){
            input /= i;
            console.log(i);
            i--;
        }
    }
}