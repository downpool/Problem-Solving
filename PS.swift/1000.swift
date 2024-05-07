import Foundation

var ab = readLine()!.split(separator: " ").map( {Int($0)!} )

print(ab[0] + ab[1])