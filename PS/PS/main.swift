import Foundation

let NandM = readLine()!.split(separator: " ").map { Int(String($0))! }

let popAndPush: String = "raise"
var stoneStacks: [Int] = []

for x in 1 ... NandM[0] {
    stoneStacks.append(x);
}

for _ in 0 ..< NandM[1] {
    let behavior = readLine()!
    if(behavior == popAndPush) {
        stoneStacks.append(stoneStacks.first!)
        stoneStacks.removeFirst()
    } else {
        stoneStacks.removeFirst()
    }
}

print(stoneStacks[0])
