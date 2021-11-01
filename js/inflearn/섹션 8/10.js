function solution(arr, m) {
    let answer = [];
    n = arr.length;
    let ch = Array.from({
        length: n
    }, () => 0);
    let temp = Array.from({
        length: m
    }, () => 0);

    function DP(l) {
        if (l == m) {
            answer.push(temp.slice());
        } else {
            for(let i = 0; i < n; i++){
                if(ch[i] == 0){
                    ch[i] = 1;
                    temp[l] = arr[i];
                    DP(l + 1);
                    ch[i] = 0;
                }
            }
        }
    }
    DP(0);

    return answer;
}


let arr = [3, 6, 9, 5];
for(let i of solution(arr, 2)){
    console.log(i);
}
