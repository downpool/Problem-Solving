function solution(lines) {
    let answer = 0;
    let ansarr = Array(201).fill(0);
    for(let i of lines){
        for(let j = i[0] + 100; j < i[1] + 100; j++){
            ansarr[j]++;
        }
    }
    for(let i = 0; i <= 200; i++){
        if(ansarr[i] > 1){
            answer++;
        }
    }
    return answer;
}