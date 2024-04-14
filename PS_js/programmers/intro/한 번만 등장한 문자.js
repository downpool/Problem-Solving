function solution(s) {
    let temp = s.split('').sort();
    let ansarr = [];
    for(let i of temp){
        if(temp.indexOf(i) == temp.lastIndexOf(i)){
            ansarr.push(i);
        }
    }    
    return ansarr.join('');
}