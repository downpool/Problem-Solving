let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 입력 형태 변환

function solution(arr){
    let temp = arr.shift().split(' ');
    let ans = Array(Number(temp[0]) + 1).fill(0);
    arr.pop();
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split(' ');
        arr[i][0] = Number(arr[i][0]);
        if(ans[arr[i][0]] >= temp[1]){
            arr.splice(i, 1);
            i--;
        }else{
            ans[arr[i][0]]++;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] % 2 == 0) arr[i][0] += 10;
    }
    arr = arr.sort(function comp(a, b){
        if(a[0] == b[0]){
            if(a[1].length == b[1].length){
                return a[1] < b[1] ? -1 : 1;
            }else{
                return a[1].length - b[1].length;
            }
        }else{
            return a[0] - b[0];
        }
    })
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] > 10) arr[i][0] -= 10;
    }
    return arr;
}
// let ind = ["4 2", "3 sunyoung", "2 junkyu", "2 dohyun", "1 minjun", "3 kihyun", "2 damin", "4 hyunsu", "0 0"];
let ind = solution(input);
for(let i of ind){
    console.log(i.join(' '));
}