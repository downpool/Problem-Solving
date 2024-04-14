function solution(ns) {
    let arr = [0, 1, 2, 4, 8];
    for(let i = 5; i <= ns; i++){
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4];
    }
    return arr[ns];
}

console.log(solution(8));