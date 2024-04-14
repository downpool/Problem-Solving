function solution(salaries, days) {
    let answer = 0;
    let give = Array(salaries.length + 1).fill(0);
    let count = 1;
    for(let [a, b] of salaries){
        if(days % a != 0){
            give[count] += b;
        }
        for(let i = 1; i <= days; i++){
            if(i % a == 0){
                give[count] += b;
            }
        }
        count++;
    }
    for(let i of give){
        answer += i;
    }
    return answer;
}

//이분탐색 x