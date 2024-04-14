function solution(s) {
    let answer = 0;
    let d = Array(s.length).fill(0);
    d[0] = 1;
    for(let i = 1; i < d.length; i++){
        let max = 0;
        for(let j = i - 1; j >= 0; j--){
            if(s[j] < s[i] && d[j] > max){
                max = d[j];
            }
        }
        d[i] = max + 1;
        answer = Math.max(answer, d[i]);
    }

    return answer;
}


let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));