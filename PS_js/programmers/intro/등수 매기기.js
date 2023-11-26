function solution(score) {
    let answer = Array(score.length).fill(1);
    let avgScore = Array(score.length);
    for(let i = 0; i < score.length; i++){
        avgScore[i] = (score[i][0] + score[i][1]) / 2;
    }
    for(let i = 0; i < score.length; i++){
        for(let j = 0; j < score.length; j++){
            if(avgScore[i] > avgScore[j]){
                answer[j]++;
            }
        }
    }
    return answer;
}