function solution(my_string) {
    let answer = 0;
    let temp = my_string.split(' ');
    let now = '+';
    for(let i of temp){
        if(i == '+' || i == '-'){
            now = i;
        }else{
            if(now == '+'){
                answer += Number(i);
            }else{
                answer -= Number(i);
            }
        }
    }
    return answer;
}