function solution(my_string) {
    let answer = 0;
    let temp = my_string.replaceAll(/[a-zA-Z]/g, ' ').split(' ');
    for(let i of temp){
        answer += Number(i); 
    }
    return answer;
}