import Foundation

let n = Int(readLine()!)!

var graph = [[Int]](repeating: [Int](repeating: 0, count: n), count: n)

for i in 0 ..< n {
    let line = readLine()!.split(separator: " ").map { Int($0)! }
    for j in 0 ..< n {
        graph[i][j] = line[j]
    }
}

func dfs(_ graph: inout [[Int]], _ x: Int, _ y: Int, _ m: Int) {
    if x < 0 || x >= n || y < 0 || y >= n || graph[y][x] <= m {
        return
    }
    graph[y][x] = m
    dfs(&graph, x + 1, y, m)
    dfs(&graph, x - 1, y, m)
    dfs(&graph, x, y + 1, m)
    dfs(&graph, x, y - 1, m)
}

var count = 0

for k in 0 ... 100 {
    var cnt = 0
    var graphs = graph
    for i in 0 ..< n {
        for j in 0 ..< n {
            if graphs[i][j] > k {
                dfs(&graphs, j, i, k)
                cnt += 1
            }
        }
    }
    count = max(count, cnt)
}

print(count)
