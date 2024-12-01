import Foundation

var nm = readLine()!.split(separator: " ").map{Int($0)!}
var (n, m) = (nm[0], nm[1])

var stack = [Int]()

func dfs(){
    if stack.count == m {
        print(stack.map{ String($0) }.joined(separator:" "))
        return
    }

    for i in 1...n {
        if !stack.contains(i) {
            stack.append(i)
            dfs()
            stack.removeLast()
        }

    }
}

dfs()