let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let from = input[1].split('');
let to = input[2].split('');

function change(arr, index){
    for(let i = index - 1; i <= index + 1; i++){
        if(0 <= i && i < arr.length){
            arr[i] = (1 - arr[i]).toString();
        }
    }
}

