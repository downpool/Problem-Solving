import Foundation

let n: Int = Int(readLine()!)!

for i: Int in stride(from: 1, through: n, by: 1) {
    for _ in stride(from: n - i - 1, through: 0, by: -1) {
        print(" ", terminator: "")
    }
    for _ in stride(from: 1, through: i, by: 1) {
        print("*", terminator: "")
    }
    print("")
}