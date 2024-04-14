function solution(s) {
    let answer = '';
    let stack = [];
    for (let i of s) {
        if (i === '(') {
            stack.push(i);
        } else if (i === ')') {
            stack.pop();
        } else {
            if (stack.length === 0) {
                answer += i;
            }
        }
    }
    return answer;
}


let array = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(array));