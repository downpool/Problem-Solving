import Foundation

var nm = readLine()!.split(separator: " ").map{Int($0)!}
var (n, m) = (nm[0], nm[1])

var stack = [Int]()

func dfs(_ now: Int){
    if stack.count == m {
        print(stack.map{ String($0) }.joined(separator:" "))
        return
    }

    for i in now ..< n + 1 {
        if !stack.contains(i) {
            stack.append(i)
            dfs(i + 1)
            stack.removeLast()
        }
    }
}

dfs(1)