function solution(my_str, n) {
    let answer = [];
    while(my_str.length){
        answer.push(my_str.substring(0, n));
        my_str = my_str.slice(n);
    }
    return answer;
}