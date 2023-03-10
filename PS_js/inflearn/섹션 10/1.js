function solution(n) {
    let arr = Array(n + 1).fill(0);

    arr[1] = 1;
    arr[2] = 2;
    for(let i = 3; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}


let arr = 7;
console.log(solution(arr));