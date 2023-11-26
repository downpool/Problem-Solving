function solution(A, B) {
    let count = 0;
    let teA = A.split('');
    let teB = B.split('');
    for(let i = 0; i < teA.length; i++){
        if(teA.join('') == teB.join('')){
            return count;
        }else{
            let temp = teA.pop();
            teA.unshift(temp);
            count++;
        }
    }
    return -1;
}