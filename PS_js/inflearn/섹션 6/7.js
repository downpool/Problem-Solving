function solution(s1, s2) {
    let answer = 'YES';

    let queue = s1.split('');
    for(let i = 0; i < s2.length; i++){
        if(s2[i] === queue[0]){
            queue.shift();
        }
    }
    if(queue.length !== 0) answer = 'NO';
    
    return answer;
}


let arr1 = 'CBA';
let arr2 = 'CDABGE';
console.log(solution(arr1, arr2));