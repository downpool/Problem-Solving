// import Foundation

// var nmv = readLine()!.split(separator: " ").map{Int($0)!}

// var graph = [[Int](repeating: 0, count: nm[0] + 1)](repeating: 0, count: nm[0] + 1)

// for _ in 0 ..< nmv[1] {
//     let i = readLine()!.split(separator: " ").map{Int($0)!}
//     graph[i[0]][i[1]] = 1
//     graph[i[1]][i[0]] = 1
// }

// var Dvisited = [Bool](repeating: false, count: nm[0] + 1)
// var Bvisited = [Bool](repeating: false, count: nm[0] + 1)
// var Danswer = []
// var Banswer = []

// func dfs(_ v: Int) {
//     Dvisited[v] = true
//     Danswer.append(v)

//     for i in graph[v] {
//         if !Dvisited[v][i] {
//             dfs(i)
//         }
//     }
// }

// func bfs(_ v: Int) {

// }
import Foundation

func bfs(_ graph: [[Int]], _ start: Int, _ visited: inout [Bool]) {
    var queue = [start]
    visited[start] = true

    while !queue.isEmpty {
        let node = queue.removeFirst()
        print(node, terminator: " ")  // 현재 노드 출력

        for neighbor in graph[node].sorted() {
            if !visited[neighbor] {
                queue.append(neighbor)
                visited[neighbor] = true
            }
        }
    }
}

func dfs(_ graph: [[Int]], _ v: Int, _ visited: inout [Bool]){
    visited[v] = true
    print(v, terminator: " ")

    for i in graph[v].sorted() {
        if !visited[i] {
            dfs(graph, i, &visited)
        }
    }
}

// 입력 처리
let firstLine = readLine()!.split(separator: " ").map { Int($0)! }
let (n, m, v) = (firstLine[0], firstLine[1], firstLine[2])

// 그래프 초기화
var graph = [[Int]](repeating: [], count: n + 1)
for _ in 0..<m {
    let edge = readLine()!.split(separator: " ").map { Int($0)! }
    let (u, v) = (edge[0], edge[1])
    graph[u].append(v)
    graph[v].append(u)  // 양방향 그래프이므로 반대 방향도 추가
}

// 방문 배열 초기화
var Dvisited = [Bool](repeating: false, count: n + 1)
dfs(graph, v, &Dvisited)
print()
var Bvisited = [Bool](repeating: false, count: n + 1)
bfs(graph, v, &Bvisited)
