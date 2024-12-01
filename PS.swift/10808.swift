import Foundation

let input = readLine()!
var frequencies = Array(repeating: 0, count: 26)

for char in input {
    let index = Int(char.asciiValue! - Character("a").asciiValue!)
    frequencies[index] += 1
}

print(frequencies.map { String($0) }.joined(separator: " "))
