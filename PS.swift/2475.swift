import Foundation

var line = readLine()!.split(separator: " ").map{Int($0)!}

var cnt = 0

for i in line {
    cnt += i * i
}

print(cnt % 10)