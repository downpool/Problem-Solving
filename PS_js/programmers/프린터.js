function solution(priorities, location) {
    let answer = 0;
    let arr = priorities.slice(0);
    let ret = arr.map((_, i) => i);
    let ansarr = [];
    while(arr.length){
        let max = Math.max(...arr);
        while(arr[0] != max){
            let node = arr.shift();
            let pos = ret.shift();
            arr.push(node);
            ret.push(pos);
        }
        arr.shift();
        let pos = ret.shift();
        ansarr.push(pos);
    }
    //???
    answer = ansarr.indexOf(location) + 1;
    return answer;
}