import Foundation

let n = Int(readLine()!)! + 1
let m = Int(readLine()!)!

var graph = [[Int]](repeating: [], count: n)

for _ in 0 ..< m {
    let temp = readLine()!.split(separator: " ").map{Int($0)!}
    let (u, v) = (temp[0], temp[1])
    graph[u].append(v)
    graph[v].append(u)
}

var visited = [Bool](repeating: false, count: n)

func bfs(_ graph: [[Int]], _ v: Int, _ visited: inout [Bool]) {
    var queue = [v]
    var cnt = 2
    visited[v] = true
    while cnt >= 0 {
        let node = queue.removeFirst()
        for k in graph[node] {
            if !visited[k] {
                queue.append(k)
                visited[k] = true
            }
        }
    }
}

bfs(graph, 1, &visited)
visited[1] = false
var count = 0
for i in visited {
    if i {
        count += 1
    }
}

print(visited)
// import Foundation

// let n = Int(readLine()!)! + 1
// let m = Int(readLine()!)!

// var graph = [[Int]](repeating: [], count: n)

// for _ in 0..<m {
//     let temp = readLine()!.split(separator: " ").map { Int($0)! }
//     let (u, v) = (temp[0], temp[1])
//     graph[u].append(v)
//     graph[v].append(u)
// }

// var visited = [Bool](repeating: false, count: n)

// func bfs(_ graph: [[Int]], _ v: Int, _ visited: inout [Bool]) -> Int {
//     var queue: [(node: Int, depth: Int)] = [(v, 0)]
//     visited[v] = true
//     var count = 0

//     while !queue.isEmpty {
//         let (node, depth) = queue.removeFirst()

//         if depth >= 2 {
//             continue  // 탐색 깊이가 2 이상이면 추가 탐색하지 않음
//         }

//         for neighbor in graph[node] {
//             if !visited[neighbor] {
//                 queue.append((neighbor, depth + 1))
//                 visited[neighbor] = true
//                 count += 1  // 새로운 친구 카운트
//             }
//         }
//     }

//     return count
// }

// let result = bfs(graph, 1, &visited)
// print(result)
