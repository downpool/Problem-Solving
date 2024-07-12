import Foundation

let n = Int(readLine()!)!

var graph = [[Int]](repeating: [Int](repeating: 0, count: n), count: n)

for i in 0 ..< n {
    let line = readLine()!.map{Int(String($0))!}
    for j in 0 ..< n {
        graph[i][j] = line[j]
    }
}




var count = 0
func dfs(_ x: Int, _ y: Int){
    if x < 0 || x >= n || y < 0 || y >= n || graph[x][y] == 0 {
        return 
    }

    graph[x][y] = 0
    count += 1

    dfs(x, y + 1)
    dfs(x, y - 1)
    dfs(x - 1, y)
    dfs(x + 1, y)
}
var cnt = 0
var add: [Int] = []
for i in 0 ..< n {
    for j in 0 ..< n {
        if graph[i][j] == 1 {
            dfs(i, j)
            add.append(count)
            count = 0
            cnt += 1
        }
    }
}
add.sort()
print(cnt)
for i in add {
    print(i)
}