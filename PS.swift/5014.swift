import Foundation

var FSGUD = readLine()!.split(separator: " ").map{Int($0)!}
var visited = [Int](repeating: 1000002, count: FSGUD[0] + 1)

func bfs(_ now: Int, _ count: Int) {
    if now > FSGUD[0] || now < 1 || visited[now] != 1000002 {
        return
    }

    visited[now] = min(visited[now], count)

    bfs(now + FSGUD[3], count + 1)
    bfs(now - FSGUD[4], count + 1)
}

bfs(FSGUD[1], 0)

if visited[FSGUD[2]] != 1000002 {
    print(visited[FSGUD[2]])
}else{
    print("use the stairs")
}

// import Foundation

// var FSGUD = readLine()!.split(separator: " ").map { Int($0)! }
// let (F, S, G, U, D) = (FSGUD[0], FSGUD[1], FSGUD[2], FSGUD[3], FSGUD[4])
// var visited = [Bool](repeating: false, count: F + 1)
// var queue = [(floor: Int, count: Int)]()

// func bfs(_ start: Int) -> Int {
//     queue.append((start, 0))
//     visited[start] = true

//     while !queue.isEmpty {
//         let (current, steps) = queue.removeFirst()

//         if current == G { // 목표 층에 도달한 경우
//             return steps
//         }

//         let up = current + U
//         let down = current - D

//         if up <= F && !visited[up] {
//             visited[up] = true
//             queue.append((up, steps + 1))
//         }

//         if down >= 1 && !visited[down] {
//             visited[down] = true
//             queue.append((down, steps + 1))
//         }
//     }

//     return -1 // 목표 층에 도달할 수 없는 경우
// }

// let result = bfs(S)
// if result == -1 {
//     print("use the stairs")
// } else {
//     print(result)
// }
