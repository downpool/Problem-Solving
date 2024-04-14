function solution(array, n) {
    array.sort((a, b) => {return b - a});
    array.sort((a, b) => {
        if(Math.abs(a - n) < Math.abs(b - n)){
            return -1;
        }else if(Math.abs(a - n) == Math.abs(b - n)){
            return a > b ? b - a : a - b;
        }else{
            return 1;
        }
    })
    return array[0];
}