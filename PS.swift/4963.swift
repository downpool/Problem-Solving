// import Foundation


// var mn = readLine()!.split(separator: " ").map{Int($0)!}
// func dfs(_ x: Int, _ y: Int){
//     if x < 0 || x >= mn[1] || y < 0 || y >= mn[0] || graph[x][y] == 0 {
//         return 
//     }

//     graph[x][y] = 0

//     dfs(x + 1, y + 1)
//     dfs(x - 1, y + 1)
//     dfs(x, y + 1)
//     dfs(x, y + 1)
//     dfs(x, y - 1)
//     dfs(x, y - 1)
//     dfs(x - 1, y - 1)
//     dfs(x + 1, y - 1)
// }
// var graph = [[Int]](repeating: [Int](repeating: 0, count: mn[1]), count: mn[0])


// while(true){
//     var count = 0
//     for i in 0 ..< mn[1] {
//         let line = readLine()!.split(separator: " ").map{Int($0)!}
//         for j in 0 ..< mn[0] {
//             graph[i][j] = line[j]
//         }
//     }

//     for i in 0 ..< mn[0] {
//         for j in 0 ..< mn[1] {
//             if graph[i][j] == 1 {
//                 dfs(i, j)
//                 count += 1
//             }
//         }
//     }
//     print(count)
//     count = 0
//     mn = readLine()!.split(separator: " ").map{Int($0)!}
//     if mn[0] == 0 || mn[1] == 0 { break }
//     graph = [[Int]](repeating: [Int](repeating: 0, count: mn[1]), count: mn[0])
// }
import Foundation

func dfs(_ x: Int, _ y: Int, _ rows: Int, _ cols: Int, _ graph: inout [[Int]]) {
    if x < 0 || x >= rows || y < 0 || y >= cols || graph[x][y] == 0 {
        return
    }

    graph[x][y] = 0  // 방문한 섬은 0으로 설정하여 재방문하지 않도록 함

    // 8방향 탐색
    let dx = [1, 1, 1, 0, 0, -1, -1, -1]
    let dy = [0, 1, -1, 1, -1, 0, 1, -1]

    for i in 0..<8 {
        dfs(x + dx[i], y + dy[i], rows, cols, &graph)
    }
}

while true {
    // 행과 열 입력
    let mnInput = readLine()!.split(separator: " ").map { Int($0)! }
    let (cols, rows) = (mnInput[0], mnInput[1])

    if cols == 0 && rows == 0 { break }  // 0 0 입력 시 종료

    // 그래프 초기화
    var graph = [[Int]](repeating: [Int](repeating: 0, count: cols), count: rows)

    // 그래프 입력 받기
    for i in 0..<rows {
        let line = readLine()!.split(separator: " ").map { Int($0)! }
        for j in 0..<cols {
            graph[i][j] = line[j]
        }
    }

    // 섬의 개수 세기
    var count = 0
    for i in 0..<rows {
        for j in 0..<cols {
            if graph[i][j] == 1 {
                dfs(i, j, rows, cols, &graph)
                count += 1
            }
        }
    }
    print(count)
}
