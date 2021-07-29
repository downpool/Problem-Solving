function solution(s) {
    let answer = 0;
    let stack = [];

    for (let i of s) {
        if (!isNaN(i)) {
            stack.push(Number(i));
        } else {
            let one = stack.pop();
            let two = stack.pop();
            if (i === '+') stack.push(two + one);
            else if (i === '-') stack.push(two - one);
            else if (i === '*') stack.push(two * one);
            else if (i === '/') stack.push(two / one);
        }
    }
    answer = stack[0];
    return answer;
}


let array = '352+*9-';
console.log(solution(array));