function solution(quiz) {
    let answer = [];
    for(let i of quiz){
        let temp = i.split(' ');
        let tempans = 0;
        if(temp[1] == '+'){
            tempans = Number(temp[0]) + Number(temp[2]);
        }else{
            tempans = Number(temp[0]) - Number(temp[2]);
        }
        if(tempans != Number(temp[4])){
            answer.push('X');
        }else{
            answer.push('O');
        }
    }
    return answer;
}