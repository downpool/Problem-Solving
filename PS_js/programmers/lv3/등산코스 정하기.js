// function solution(n, paths, gates, summits) {
//     let INF = Number.MAX_SAFE_INTEGER;
//     let answer = [n, INF];
//     let dist = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));
//     let visitNode = Array.from(Array(n + 1), () => Array.from(Array(n + 1), () => []));
//     for (let i = 1; i <= n; i++) {
//         dist[i][i] = 0;
//         visitNode[i][i].push(i);
//     }
//     for (let [a, b, c] of paths) {
//         dist[a][b] = c;
//         dist[b][a] = c;
//         visitNode[a][b].push(a, b);
//         visitNode[b][a].push(a, b);
//     }
//     for (let k = 1; k <= n; k++) {
//         for (let i = 1; i <= n; i++) {
//             for (let j = 1; j <= n; j++) {
//                 if (dist[i][j] > dist[i][k] + dist[k][j]) {
//                     dist[i][j] = dist[i][k] + dist[k][j];
//                     if (gates.includes(k) || summits.includes(k)) {
//                         visitNode[i][j].push(-1);
//                     } else {
//                         visitNode[i][j].push(k);
//                     }
//                 }
//             }
//         }
//     }

//     let minimum = INF;
//     for (let i of gates) {
//         for (let j of summits) {
//             let iToj = dist[i][j] + dist[j][i];
//             if (visitNode[i][j].includes(-1)) {
//                 continue;
//             } else {
//                 if (minimum > iToj) {
//                     answer[1] = iToj;
//                     answer[0] = j;
//                 } else if (minimum == iToj) {
//                     answer[0] = answer[0] > j ? j : answer[0];
//                 } else {
//                     continue;
//                 }
//             }
//         }
//     }

//     return answer;
// }
// console.log(solution(7, [
//     [1, 4, 4],
//     [1, 6, 1],
//     [1, 7, 3],
//     [2, 5, 2],
//     [3, 7, 4],
//     [5, 6, 6]
// ], [1], [2, 3, 4]));


function solution(n, paths, gates, summits) {
    let path = paths.slice();
    for (let i of paths) {
        let [a, b, c] = i;
        path.push([b, a, c]);
    }
    function find(parent, x) {
        if (x === parent[x]) {
            return x;
        }
        return parent[x] = find(parent, parent[x]);
    }

    function union(parent, rank, x, y) {
        const rootX = find(parent, x);
        const rootY = find(parent, y);
        if (rootX === rootY) {
            return false;
        }
        if (rank[rootX] > rank[rootY]) {
            [rootX, rootY] = [rootY, rootX];
        }
        parent[rootX] = rootY;
        if (rank[rootX] === rank[rootY]) {
            rank[rootY]++;
        }
        return true;
    }
    let minimum = Number.MAX_SAFE_INTEGER;
    function kruskal(n, edges) {
        const parent = Array.from({
            length: n
        }, (_, i) => i);
        const rank = Array.from({
            length: n
        }, () => 1);
        edges.sort((a, b) => a[2] - b[2]);
        let result = 0;
        for (const [u, v, weight] of edges) {
            if (union(parent, rank, u, v)) {
                result += weight;
            }
        }
        return result;
    }
}

console.log(solution(7, [
    [1, 4, 4],
    [1, 6, 1],
    [1, 7, 3],
    [2, 5, 2],
    [3, 7, 4],
    [5, 6, 6]
], [1], [2, 3, 4]));