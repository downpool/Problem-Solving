/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let visited = new Array(isConnected[0].length).fill(false);
    let count = 1;
    for (let i = 0; i < visited.length; i++) {
        if (visited[i]) continue;
        BFS(i);
        if (visited.includes(false)) {
            count++;
        } else {
            break;
        }
    }
    return count;

    function BFS(v) {
        let queue = [v];
        visited[v] = true;

        while (queue.length) {
            let node = queue.shift();
            for (let j = 0; j < isConnected[node].length; j++) {
                if (isConnected[node][j] == 1 && !visited[j]) {
                    queue.push(j);
                    visited[j] = true;
                }
            }
        }
    }
};

/*

1. 이 문제는 그래프 탐색의 가장 기본적인 문제입니다.
비연결 그래프가 주어지고 각각의 그래프의 개수를 구하는 문제입니다.

2. 일단 저는 bfs를 떠올려서, 노드를 1부터 탐색을 했을때 visited 배열에 false값이 남아있으면
그 노드와는 연결되지 않았다는 뜻이므로 count를 해줍니다.
이 방식으로 이 문제를 해결하였습니다.

어려웠던 점은 이미 연결된 노드를 재탐색 하고 있었다는 점을 간과하였고, 그 부분을 해결하는 점이 어려웠습니다.

1. This is the most basic problem in graph exploration.
Given a set of disconnected graphs, find the number of graphs in each of them.

2. First, I thought of BFS, where you traverse a node from 1 and if the visited array has a value of false, then you count it.
it means we haven't connected to that node, so we count it.
This solved the problem.

The difficulty was that I overlooked the fact that I was re-exploring nodes that I was already connected to, and that was the hard part.

*/