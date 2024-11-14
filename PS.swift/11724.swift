import Foundation

var nm = readLine()!.split(separator: " ").map{Int($0)!}

var graph = [[Int]](repeating: [], count: nm[0] + 1)

for _ in 0 ..< nm[1] {
    let temp = readLine()!.split(separator: " ").map{Int($0)!}
    let (u, v) = (temp[0], temp[1])
    graph[u].append(v)
    graph[v].append(u)
}

var visited = [Bool](repeating: false, count: nm[0] + 1)
visited[0] = true
var count = 0

func dfs(_ start: Int) {
    visited[start] = true
    
    for i in graph[start] {
        if !visited[i] {
            dfs(i)
        }
    }
}

for i in 1 ... nm[0] {
    if !visited[i] {
        dfs(i)
        count += 1
    }
}
print(count)