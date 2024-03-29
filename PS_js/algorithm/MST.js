function Prim() {
    //인접 행렬
    let n = 7;
    let graph = Array.from(Array(n), () => Array(n));
    //1번부터 인덱스를 사용하기 위해서
    let visited = Array(n + 1).fill(false);
    let dist = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    let result = 0;
    dist[0] = 0;
    let cnt = 0;
    while (true) {
        let min = Number.MAX_SAFE_INTEGER;
        let idx = 0;
        for (let i = 1; i <= n; i++) {
            if (!visited[i] && dist[i] < min) {
                idx = i;
                min = dist[i];
            }
        }
        visited[idx] = true;
        result += min;
        cnt++;

        if (cnt == n) break;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && graph[idx][i] > 0 && dist[i] > graph[idx][i]) {
                dist[i] = graph[idx][i];
            }
        }
    }

    console.log(result);
}

//프림
//1. 그래프에서 아무 정점이나 선택
//2. 선택한 정점과 선택 하지 않은 정점을 연결하는 간선 중 최솟값을 고른다.
//   이 간선을 (u == 선택, v != 선택)라고 함
//3. 선택한 간선을 mst에 추가하고 v를 선택함
//4. 모든 정점을 선택하지 않았다면 2번 단계로 돌아감


/*

find (x){

IF x and parent[x] is same:
    return x
ELSE
    return find(parent[x])
}


union
{
a, b = find(a), find(b)

IF a is smaller then b:
    parent[b] = a
ELSE
    parent[a] = b
}


*/

function Kruskal() {
    //인접 행렬
    //가중치의 오름차순으로 정렬하고
    //그 간선을 적용했을때의 union-find 연산함
    //또한 스패닝 트리의 간선의 수가 V - 1이면
    //종료.
    //쉽잖아..?
    let graph = [];

    function Union(a, b) {
        a = Find(a);
        b = Find(b);
        if (a < b) {
            parent[b] = a;
        } else {
            parent[a] = b;
        }
    }

    function Find(x) {
        if (x == parent[x]) {
            return x;
        } else {
            return Find(parent[x]);
        }
    }
}