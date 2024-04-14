let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//입력 형태 변환

let item = [];
function bfs(){

}

for(let i = 1; i < input.length; i++){
    let temp = input[i].split(' ');
    if(!item.includes(temp[0])){
        item.push(temp[0]);
    }
    if(!item.includes(temp[1])){
        item.push(temp[1]);
    }
}
let graph = {};

for(let i = 1; i < input.length; i++){

}