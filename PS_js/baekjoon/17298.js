let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환
let cnt = Number(input[0]);
let fir = input[1].split(' ');

//테스트 케이스
// let fir = [3, 15, 12, 7, 9, 1, 1, 19, 11, 12];
// let cnt = 10;

function solution(ar, cnt) {
    let temp = [];
    let answer = [];

    for (let i = 0; i < cnt; i++) {
        let a = Number(ar.pop());
        for (; a >= temp[temp.length - 1] && temp.length > 1; temp.pop());
        let k = temp.pop();
        if (!k || a >= k) {
            answer.unshift(-1);
        } else {
            answer.unshift(k);
            temp.push(k);
        }
        temp.push(a);
    }
    return answer;
}

function f_solution(arl, cnt){
    let temp = [];
    let tm = 0;
    let arr = [];
    arl.forEach(x => arr.push(Number(x)));
    for(let i = cnt - 1; i >= 0; i--){
        for(; arr[i] >= temp[temp.length - 1] && temp.length > 0; temp.pop());
        let k = temp.pop();
        if(arr[i] < k){
            tm = arr[i];
            arr[i] = k;
            temp.push(k);
            temp.push(tm);
        }else{
            temp.push(arr[i]);
            arr[i] = -1;
        }
    }
    return arr;
}
//출력파트

console.log(f_solution(fir, cnt).join(' '));