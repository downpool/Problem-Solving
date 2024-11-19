import Foundation

let _ = readLine()!
var ns = readLine()!.map{String($0)}

var ans = 0

for i in ns {
    ans += Int(i)!
}

print(ans)