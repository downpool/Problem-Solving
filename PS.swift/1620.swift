import Foundation

let input = readLine()!.split(separator: " ").map { Int($0)! }
let (n, m) = (input[0], input[1])

var nameToIndex = [String: Int]()
var indexToName = [String](repeating: "", count: n + 1)

for i in 1...n {
    let name = readLine()!
    nameToIndex[name] = i
    indexToName[i] = name
}

var result = ""
for _ in 0..<m {
    let query = readLine()!
    if let number = Int(query) {
        result += "\(indexToName[number])\n"
    } else if let index = nameToIndex[query] {
        result += "\(index)\n"
    }
}

print(result)
