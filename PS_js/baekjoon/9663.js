let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);

let a = Array.from(Array(15), () => Array(15));
let check_col = Array(15);
let check_dig = Array(40);
let check_dig2 = Array(40);
function check(row, col) {
    // |
    if (check_col[col]) {
        return false;
    }
    // 왼쪽 위 대각선
    if (check_dig[row + col]) {
        return false;
    }
    // /
    if (check_dig2[row - col + n]) {
        return false;
    }
    return true;
}

function calc(row) {
    if (row == n) {
        // ans += 1;
        return 1;
    }
    let cnt = 0;
    for (let col = 0; col < n; col++) {
        if (check(row, col)) {
            check_dig[row + col] = true;
            check_dig2[row - col + n] = true;
            check_col[col] = true;
            a[row][col] = true;
            cnt += calc(row + 1);
            check_dig[row + col] = false;
            check_dig2[row - col + n] = false;
            check_col[col] = false;
            a[row][col] = false;
        }
    }
    return cnt;
}

console.log(calc(0));