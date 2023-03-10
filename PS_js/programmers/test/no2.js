function solution(scores) {
    let answer = [];
    let arr = [];
    // for(let i = 0; i < scores.length; i++){
    //     arr[i][0] = scores[i][0];
    //     arr[i][1] = scores[i][1];
    //     arr[i][2] = i;
    // }
    let asum = 0;
    let bsum = 0;

    let cnt = 1;
    for(let [a, b] of scores){
        arr.push([a, b, cnt++, a + b, 0]);
        asum += a;
        bsum += b;
    }
    arr.sort((a, b) => {
        if(a[3] != b[3]){
            return b[3] - a[3];
        }
        if(asum > bsum){
            return b[1] - a[1];
        }else if(asum < bsum){
            return b[0] - a[0]; 
        }else{
            return a[2] - b[2];
        }
    })
    for(let i = 0; i < arr.length; i++){
        arr[i][4] = i + 1;
    }

    arr.sort((a, b) => {return a[2] - b[2]});
    for(let i of arr){
        answer.push(i[4]);
    }

    return answer;
}