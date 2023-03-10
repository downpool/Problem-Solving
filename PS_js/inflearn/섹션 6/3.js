function solution(board, moves) {
    var answer = 0;
    let stack = [];
    let length = board.length;

    for (let i = 0; i < moves.length; i++) {
        let m = moves[i] - 1;
        let ok = false;
        for (let j = 0; j < length; j++) {
            if (board[j][m] !== 0) {
                stack.push(board[j][m]);
                board[j][m] = 0;
                ok = true;
                break;
            }
        }
        if (stack[stack.length - 1] === stack[stack.length - 2] && ok) {
            stack.pop();
            stack.pop();
            answer += 2;
        }
    }

    return answer;
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));