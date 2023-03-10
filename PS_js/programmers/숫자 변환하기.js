function solution(x, y, n) {
    function bfs(a, b, c){
        let max = 1000001;
        let queue = [[a, 0]];
        //
        while(queue.length < max / 2 && queue.length){
            let node = queue.shift();
            if(node[0] == b){
                return node[1];
            }else{
                if(node[0] + c <= max){
                    queue.push([node[0] + c, node[1] + 1]);
                }
                if(node[0] * 2 <= max){
                    queue.push([node[0] * 2, node[1] + 1]);
                }
                if(node[0] * 3 <= max){
                    queue.push([node[0] * 3, node[1] + 1]);
                }
            }
        }
        return -1;
    }
    return bfs(x, y, n);
}