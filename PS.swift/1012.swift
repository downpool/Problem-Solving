import Foundation

let n = Int(readLine()!)!

for _ in 0 ..< n {
    let line = readLine()!.split(separator: " ").map{Int($0)!}
    var graph = [[Bool]](repeating: [Bool](repeating: false, count: line[1]), count: line[0])
    for _ in 0 ..< line[2] {
        let comma = readLine()!.split(separator: " ").map{Int($0)!}
        graph[comma[0]][comma[1]] = true
    }

    func dfs(_ x: Int, _ y: Int) {
        if x < 0 || x >= line[0] || y < 0 || y >= line[1] || graph[x][y] == false {
            return
        }

        graph[x][y] = false

        dfs(x, y + 1)
        dfs(x, y - 1)
        dfs(x + 1, y)
        dfs(x - 1, y)
    }

    var count = 0

    for i in 0 ..< line[0] {
        for j in 0 ..< line[1] {
            if graph[i][j] {
                dfs(i, j)
                count += 1
            }
        }
    }

    print(count)
}