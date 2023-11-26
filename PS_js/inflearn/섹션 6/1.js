function solution(s) {
    let answer = 'YES';
    let stack = [];

    for(let i of s){
        if(i === '('){
            stack.push(i);
        }else{
            stack.pop();
        }
        if(stack.length < 0) answer = 'NO';
    }
    if(stack.length !== 0) answer = 'NO';
    

    return answer;
}


let array = '()(())()';
console.log(solution(array));