let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

for(let i = 1; i < input.length; i++){
    let ans = 0;
    let stack = 0;
    for(let j of input[i]){
        if(j == 'O'){
            stack++;
            ans += stack;
        }else{
            stack = 0;
            ans += stack;
        }
    }
    console.log(ans);
}