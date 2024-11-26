let NM = readLine()!.split(separator: " ").map { Int($0)! }
let N = NM[0]
let M = NM[1]

var stack = [Int]()

func dfs(start: Int) {
    if stack.count == M {
        print(stack.map { String($0) }.joined(separator: " "))
        return
    }

    for i in start...N {
        stack.append(i)
        dfs(start: i) // 같은 숫자를 다시 사용할 수 있으므로 start = i
        stack.removeLast() // 백트래킹: 이전 상태로 되돌림
    }
}

dfs(start: 1)
