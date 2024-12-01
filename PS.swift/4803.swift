import Foundation

var testCase = 1

while let input = readLine(), !input.isEmpty {
    let nm = input.split(separator: " ").map { Int($0)! }
    let (n, m) = (nm[0], nm[1])
    
    if n == 0 && m == 0 {
        break
    }
    
    var graph = Array(repeating: [Int](), count: n + 1)
    var visited = Array(repeating: false, count: n + 1)
    var treeCount = 0
    
    for _ in 0..<m {
        let edge = readLine()!.split(separator: " ").map { Int($0)! }
        let (u, v) = (edge[0], edge[1])
        graph[u].append(v)
        graph[v].append(u)
    }
    
    func isTree(node: Int, parent: Int) -> Bool {
        visited[node] = true
        
        for neighbor in graph[node] {
            if !visited[neighbor] {
                if !isTree(node: neighbor, parent: node) {
                    return false
                }
            } else if neighbor != parent {
                return false
            }
        }
        return true
    }
    
    for i in 1...n {
        if !visited[i] {
            if isTree(node: i, parent: -1) {
                treeCount += 1
            }
        }
    }
    
    if treeCount == 0 {
        print("Case \(testCase): No trees.")
    } else if treeCount == 1 {
        print("Case \(testCase): There is one tree.")
    } else {
        print("Case \(testCase): A forest of \(treeCount) trees.")
    }
    
    testCase += 1
}
