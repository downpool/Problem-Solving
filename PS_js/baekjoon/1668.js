let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let lcount = 0, rcount = 0, lmax = 0, rmax = 0;
for(let i = 1; i < input.length; i++){
    input[i] = Number(input[i]);
    if(lmax < input[i]){
        lmax = input[i];
        lcount++;
    }
}
for(let i = input.length - 1; i > 0; i--){
    if(rmax < input[i]){
        rmax = input[i];
        rcount++;
    }
}

console.log(lcount + " " + rcount);