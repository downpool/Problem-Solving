function solution(numlist, n) {
    numlist.sort((a, b) => {return a - b});
    numlist.sort((a, b) => {
        if(Math.abs(a - n) < Math.abs(b - n)){
            return -1;
        }else if(Math.abs(a - n) == Math.abs(b - n)){
            return a > b ? b - a : a - b;
        }else{
            return 1;
        }
    })
    return numlist;
}