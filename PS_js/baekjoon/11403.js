let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let size = Number(input.shift());
let graph = Array.from(Array(size), () => Array(size));
//그래프 채우기
for(let i = 0; i < input.length; i++){
    let temp = input[i].split(' ');
    for(let j = 0; j < temp.length; j++){
        graph[i][j] = temp[j];
    }
}

for(let k = 0; k < size; k++){
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(graph[i][k] == 1 && graph[k][j] == 1){
                graph[i][j] = 1;
            }
        }
    }
}
for(let i = 0; i < size; i++){
    let ans = graph[i].join(' ');
    console.log(ans);
}