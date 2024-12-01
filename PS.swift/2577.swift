import Foundation

let a = Int(readLine()!)!
let b = Int(readLine()!)!
let c = Int(readLine()!)!

let result = String(a * b * c)
var frequencies = Array(repeating: 0, count: 10)

for char in result {
    let index = Int(String(char))!
    frequencies[index] += 1
}

for frequency in frequencies {
    print(frequency)
}
