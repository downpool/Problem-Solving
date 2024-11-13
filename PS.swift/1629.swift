import Foundation

var abc = readLine()!.split(separator: " ").map{Int($0)!}

var (a, b, c) = (abc[0], abc[1], abc[2])

func calc(_ a: Int, _ b: Int, _ c: Int) -> Int {
    if b == 0 {
        return 1
    }

    var half = calc(a, b / 2, c) 
    half = (half * half) % c

    if b % 2 != 0 {
        half = (half * a) % c

    }
    return half
}

print(calc(a, b, c))