function solution(n) {
    let curse = Array(n + 1).fill(0);
    for(let i = 1; i <= n; i++){
        let temp = curse[i - 1] + 1;
        while(true){
            if(temp % 3 == 0 || String(temp).split('').includes('3')){
                temp++;
            }else{
                break;
            }
        }
        curse[i] = temp;
    }
    return curse[n];
}