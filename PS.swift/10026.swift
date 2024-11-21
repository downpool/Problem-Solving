import Foundation

// 입력 처리
let n = Int(readLine()!)!
var grid: [[Character]] = []
for _ in 0..<n {
    grid.append(Array(readLine()!))
}

// 방향 벡터
let directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

// BFS 함수
func bfs(_ x: Int, _ y: Int, _ color: Character, _ isColorBlind: Bool, _ visited: inout [[Bool]]) {
    var queue = [(x, y)]
    visited[x][y] = true

    while !queue.isEmpty {
        let (cx, cy) = queue.removeFirst()

        for (dx, dy) in directions {
            let nx = cx + dx, ny = cy + dy

            if nx >= 0, ny >= 0, nx < n, ny < n, !visited[nx][ny] {
                if isColorBlind {
                    if (color == "R" || color == "G") && (grid[nx][ny] == "R" || grid[nx][ny] == "G") {
                        visited[nx][ny] = true
                        queue.append((nx, ny))
                    } else if grid[nx][ny] == color {
                        visited[nx][ny] = true
                        queue.append((nx, ny))
                    }
                } else {
                    if grid[nx][ny] == color {
                        visited[nx][ny] = true
                        queue.append((nx, ny))
                    }
                }
            }
        }
    }
}

// 구역 계산 함수
func countRegions(_ isColorBlind: Bool) -> Int {
    var visited = Array(repeating: Array(repeating: false, count: n), count: n)
    var regions = 0

    for i in 0..<n {
        for j in 0..<n {
            if !visited[i][j] {
                regions += 1
                bfs(i, j, grid[i][j], isColorBlind, &visited)
            }
        }
    }

    return regions
}

// 결과 출력
let normalCount = countRegions(false)
let colorBlindCount = countRegions(true)
print("\(normalCount) \(colorBlindCount)")
