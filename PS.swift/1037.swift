import Foundation

let leng = Int(readLine()!)!

var line = readLine()!.split(separator: " ").map{Int($0)!}

line.sort()

print(line[0] * line[line.count - 1])