let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let size = input.shift().split(' ');
size[0] = Number(size[0]);
size[1] = Number(size[1]);
let from = [];
let to = [];
for(let i = 0; i < size[0]; i++){
    from[i] = input.shift().split('');
}
for(let i = 0; i < size[0]; i++){
    to[i] = input.shift().split('');
}
let ans = 0;

function flip(x, y){
    for(let i = x - 1; i <= x + 1; i++){
        for(let j = y - 1; j <= y + 1; j++){
            from[i][j] = (1 - from[i][j]).toString();
        }
    }
}

for(let i = 0; i < size[0] - 2; i++){
    for(let j = 0; j < size[1] - 2; j++){
        if(from[i][j] != to[i][j]){
            ans += 1;
            flip(i + 1, j + 1);
        }
    }
}
for(let i = 0; i < size[0]; i++){
    for(let j = 0; j < size[1]; j++){
        if(from[i][j] != to[i][j]){
            console.log(-1);
            return;
        }
    }
}
console.log(ans);