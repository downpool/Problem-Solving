//1번 도전
function solution(number, k) {
    let answer = '';
    let slic = number.split('');
    let count = 0;
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j < slic.length - 1; j++){
            if(slic[j] == i || slic[j] < slic[j + 1]) {
                slic.splice(j, 1);
                j--;
                count++;
            }
            if(count >= k) {
                answer = slic.join('');
                return answer;   
            }
        }
    }
    return answer;
}
//답
function solution(number, k) {
    let answer = '';
    const stack = [];
    let count = 0;

    for(let item of number){
        while(count < k && stack[stack.length - 1] < item){
            stack.pop();
            count++;
        }
        stack.push(item);
    }

    while(count < k){
        stack.pop();
        count++;
    }

    return answer;
}