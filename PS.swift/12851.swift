// import Foundation

// var nk = readLine()!.split(separator: " ").map{Int($0)!}

// var (n, k) = (nk[0], nk[1])
// var visited = [Int](repeating: 100001, count: 100001)

// // func bfs(_ now: Int, _ to: Int) {
// //     var count = 0
// //     var queue = [now]
// //     visited[now] = 0
// // }

// func bfs(_ start: Int, _ end: Int) {
//     var count = 0
//     visited[start] = count

//     start += 1

    
// }
// import Foundation

// let input = readLine()!.split(separator: " ").map { Int($0)! }
// let (n, k) = (input[0], input[1])

// if n == k {
//     print("0\n1")
//     exit(0)
// }

// var visited = [Int](repeating: Int.max, count: 100001)
// var count = 0
// var minTime = Int.max

// func bfs() {
//     var queue = [(n, 0)]
//     visited[n] = 0

//     while !queue.isEmpty {
//         let (current, time) = queue.removeFirst()

//         if time > minTime {
//             continue
//         }

//         for next in [current - 1, current + 1, current * 2] {
//             guard next >= 0 && next <= 100000 else { continue }

//             if next == k {
//                 if time + 1 < minTime {
//                     minTime = time + 1
//                     count = 1
//                 } else if time + 1 == minTime {
//                     count += 1
//                 }
//             }

//             if visited[next] >= time + 1 {
//                 visited[next] = time + 1
//                 queue.append((next, time + 1))
//             }
//         }
//     }
// }

// bfs()

// print(minTime)
// print(count)

import Foundation

let input = readLine()!.split(separator: " ").map { Int($0)! }
let (n, k) = (input[0], input[1])

if n == k {
    print("0\n1")
    exit(0)
}

let maxPosition = 100000
var visited = [Int](repeating: -1, count: maxPosition + 1)
var ways = [Int](repeating: 0, count: maxPosition + 1)

func bfs() {
    var queue = [(n, 0)] // (현재 위치, 현재 시간)
    visited[n] = 0
    ways[n] = 1
    
    while !queue.isEmpty {
        let (current, time) = queue.removeFirst()
        
        for next in [current - 1, current + 1, current * 2] {
            guard next >= 0 && next <= maxPosition else { continue }
            
            if visited[next] == -1 {  // 처음 방문
                visited[next] = time + 1
                ways[next] = ways[current]
                queue.append((next, time + 1))
            } else if visited[next] == time + 1 {  // 같은 시간에 도달
                ways[next] += ways[current]
            }
        }
    }
}

bfs()

print(visited[k]) // 최단 시간
print(ways[k])    // 최단 시간에 도달하는 방법 수
