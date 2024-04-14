function solution(a, b) {
    function gcd(x, y){
        if(y == 0){
            return x;
        }else{
            return gcd(y, x % y);
        }
    }

    

    let t = b / gcd(a, b);
    while(t % 2 == 0) t /= 2;
    while(t % 5 == 0) t /= 5;
    return (t == 1) ? 1 : 2;
}