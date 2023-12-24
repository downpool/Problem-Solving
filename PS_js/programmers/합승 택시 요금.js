function solution(n, s, a, b, fares) {
    var answer = 0;

    fares.sort((a1, b1) => {
        return a1[2] - b1[2];
    })
    let parent = Array(n + 1);
    for (let i = 0; i <= n; i++) {
        parent[i] = i;
    }

    let cost = 0;
    console.log(...parent);
    function find(parent, x) {
        if (parent[x] == x) {
            return x;
        }
        parent[x] = find(parent, parent[x]);
        return parent[x];
    }

    function union(parent, x, y) {
        let rootX = find(parent, x);
        let rootY = find(parent, y);

        if (rootX < rootY) {
            parent[rootY] = rootX;
        } else {
            parent[rootX] = rootY;
        }
    }
    let realfares = [];
    for (let i = 0; i < fares.length; i++) {
        let [x, y, z] = fares[i];
        if (find(parent, x) != find(parent, y)) {
            union(parent, x, y);
            realfares.push(fares[i]);
        }
    }
    let finalFare = Array.from(Array(n + 1), () => Array(n + 1).fill(1000001));
    for (let [x, y, z] of realfares) {
        finalFare[x][y] = z;
        finalFare[y][x] = z;
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

        }
    }
    let visited = Array(n + 1).fill(false);

    function bfs(v, visited) {
        let queue = [v];
        visited[v] = true;
        let multi = 1;
        while (queue.length) {
            let node = queue.shift();
            for (let i = 1; i <= n; i++) {
                if (finalFare[node][i] != 1000001 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                    cost += finalFare[node][i] * multi;
                }
                if (queue.length >= 2) multi = 2;
            }
        }
    }
    let distance = Array(n + 1).fill(1000001);
    function get_smallest_node() {
        let minValue = 1000001;
        let index = 0;
        for (let i = 1; i <= n; i++) {
            if (distance[i] < minValue && !visited[i]) {

            }
        }
    }

    bfs(s, visited);

    console.log(cost);

    return answer;
}