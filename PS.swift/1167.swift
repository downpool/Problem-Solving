import Foundation

let v = Int(readLine()!)!

var graph = [[(Int, Int)]](repeating: [], count: v + 1)
var visited = [Bool](repeating: false, count: v + 1)
var maxDistance = 0
var farthestNode = 0

// 입력 처리
for _ in 0..<v {
    let input = readLine()!.split(separator: " ").map { Int($0)! }
    let from = input[0]
    var i = 1
    while i < input.count - 1 {
        let to = input[i]
        let weight = input[i + 1]
        graph[from].append((to, weight))
        i += 2
    }
}

// DFS 함수
func dfs(_ node: Int, _ distance: Int) {
    visited[node] = true
    if distance > maxDistance {
        maxDistance = distance
        farthestNode = node
    }
    for (next, weight) in graph[node] {
        if !visited[next] {
            dfs(next, distance + weight)
        }
    }
}

// 트리의 지름 계산
visited = [Bool](repeating: false, count: v + 1)
dfs(1, 0)  // 임의의 노드(1번 노드)에서 가장 먼 노드 찾기

let startNode = farthestNode
maxDistance = 0
visited = [Bool](repeating: false, count: v + 1)
dfs(startNode, 0)  // 가장 먼 노드에서 다시 DFS

print(maxDistance)
