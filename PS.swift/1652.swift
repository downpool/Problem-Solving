import Foundation

var n = Int(readLine()!)!

var graph = [[String]](repeating: [String](repeating: "", count: n), count: n)

for i in 0 ..< n {
    let s = readLine()!.map{(String($0))}
    for j in 0 ..< n {
        graph[i][j] = s[j]
    }
}

var xmax = 0
var xcount = 0
var ymax = 0
var ycount = 0
var ansxcount = 0
var ansycount = 0

for i in 0 ..< n {
    xcount = 0
    ycount = 0
    xmax = 0
    ymax = 0
    for j in 0 ..< n {
        if graph[j][i] == "." {
            xcount += 1
        } else {
            xmax = max(xcount, xmax)
            xcount = 0
        }
        if graph[i][j] == "." {
            ycount += 1
        } else {
            ymax = max(ycount, ymax)
            ycount = 0
        }
    }
    if xmax >= 2 { ansxcount += 1 }
    if ymax >= 2 { ansycount += 1 }
}
print(ansxcount, ansycount)

// import Foundation

// var n = Int(readLine()!)!

// var graph = [[String]](repeating: [String](repeating: "", count: n), count: n)

// for i in 0 ..< n {
//     let s = readLine()!.map { String($0) }
//     for j in 0 ..< n {
//         graph[i][j] = s[j]
//     }
// }

// var ansxcount = 0  // 가로로 누울 자리
// var ansycount = 0  // 세로로 누울 자리

// for i in 0 ..< n {
//     var xcount = 0  // 현재 행에서 가로로 연속된 "."
//     var ycount = 0  // 현재 열에서 세로로 연속된 "."

//     for j in 0 ..< n {
//         // 가로 검사 (행 기준)
//         if graph[i][j] == "." {
//             xcount += 1
//         } else {
//             if xcount >= 2 { ansxcount += 1 }
//             xcount = 0
//         }

//         // 세로 검사 (열 기준)
//         if graph[j][i] == "." {
//             ycount += 1
//         } else {
//             if ycount >= 2 { ansycount += 1 }
//             ycount = 0
//         }
//     }

//     // 루프 종료 후 마지막 "."
//     if xcount >= 2 { ansxcount += 1 }
//     if ycount >= 2 { ansycount += 1 }
// }

// print(ansxcount, ansycount)
