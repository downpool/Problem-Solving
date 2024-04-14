function solution(polynomial) {
    let xSize = [0, 0];
    let arr = polynomial.split(' ');
    for (let i of arr) {
        let temp = i.split('');
        if(temp[temp.length - 1] == 'x'){
            temp.pop();
            if(temp.length == 0){
                xSize[0] += 1;
            }else{
                xSize[0] += Number(temp.join(''));    
            }
        }else if(temp[0] == '+'){
            continue;
        }else{
            xSize[1] += Number(temp.join(''));
        }
    }
    if(xSize[0] == 0 && xSize[1] != 0){
        return xSize[1].toString();
    }else if(xSize[1] == 0 && xSize[0] != 0){
        if(xSize[0] == 1){
            return 'x';
        }
        return xSize[0].toString() + 'x';
    }else{
        if(xSize[0] == 1){
            return 'x + ' + xSize[1];
        }
        return xSize.join('x + ');
    }
}