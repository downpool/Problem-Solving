let input = ['14',
'push 1',
'push 2',
'top',
'size',
'empty',
'pop',
'pop',
'pop',
'size',
'empty',
'pop',
'push 3',
'empty',
'top'];
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let arr = [];
let ansarr = [];
for(let i = 0; i < input.length; i++){
    let temp = input[i].split(' ');
    temp[1] = Number(temp[1]);
    if(temp[0] == 'push'){
        arr.push(temp[1])
    }else if(temp[0] == 'pop'){
        if(arr.length == 0){
            ansarr.push(-1);
        }else{
            ansarr.push(arr.pop());
        }
    }else if(temp[0] == 'size'){
        ansarr.push(arr.length);
    }else if(temp[0] == 'empty'){
        if(arr.length == 0){
            ansarr.push(1);
        }else{
            ansarr.push(0);
        }
    }else if(temp[0] == 'top'){
        if(arr.length == 0){
            ansarr.push(-1);
        }else{
            ansarr.push(arr[arr.length - 1]);
        }
    }else{
        return;
    }
}
console.log(ansarr.join('\n'));