let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let fir = input[1];
let sec = input[3];
function solution(arr, arr2){
    let answer = [];
    let map = new Map();
    for(let i of arr){
        map.set(i, 1);
    }
    for(let i of arr2){
        if(map.has(i)){
            answer.push(1);
        }else{
            answer.push(0);
        }
    }

    return answer;
}
for(let i of solution(fir.split(' '), sec.split(' '))){
    console.log(i);
}

//sol2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ');
for(let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
}
let arr2 = input[3].split(' ');
for(let i = 0; i < arr2.length; i++){
    if(!arr.includes(arr2[i])){
        console.log(0);
    }else{
        console.log(1);
    }
}

//sol3 이분탐색
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ');
for(let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
}
arr.sort();
