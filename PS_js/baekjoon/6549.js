let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let a = Array(100000);
for(let i = 0; i < input - 1; i++){
    let temp = input[i].split(" ");
    let n = Number(temp.shift());
    for(let j = 0; j < n; j++){
        a[j] = Number(temp[j]);
    }
    let s = []; 
    let ans = 0;
    for(let k = 0; k < n; k++){
        let left = k;
        while(s.length && a[s[s.length - 1]] > a[k]){
            let height = a[s.pop()];
            let width = k;
            if(s.length){
                width = k - s[s.length - 1] - 1;
            }
            if(ans < width * height){
                ans = width * height;
            }
        }
        s.push(k);
    }
    while(s.length){
        let height = a[s.pop()];
        let width = n;
        if(s.length){
            width = n - s[s.length - 1] - 1;
        }
        if(ans < width * height){
            ans = width * height;
        }
    }
    console.log(ans);
}