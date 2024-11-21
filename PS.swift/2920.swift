import Foundation

var line = readLine()!.split(separator: " ").map{Int($0)!}

var line2 = line.sorted()
var line3 = line.sorted(by: >)

if line == line3 {
    print("descending")
} else if line == line2 {
    print("ascending")
} else {
    print("mixed")
}