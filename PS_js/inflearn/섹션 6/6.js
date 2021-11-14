function solution(n, k) {
    let answer = 0;

    let queue = Array.from({
        length: n
    }, (v, k) => k + 1);
    
    for (let i = 1; i < n; i++) {
        for(let j = 1; j < k; j++){
            queue.push(queue.shift());
        }
        queue.shift();
    }
    answer = queue[0];

    return answer;
}


let n = 8;
let k = 3
console.log(solution(n, k));