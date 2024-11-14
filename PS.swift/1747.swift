import Foundation

var k = Int(readLine()!)!

func palind(_ n: Int) -> Bool {
    return String(n) == String(String(n).reversed())
}

func isPrime(_ number: Int) -> Bool {
    if number <= 1 { return false }
    if number <= 3 { return true }  // 2와 3은 소수
    var count = 0
    for i in 1 ... Int(sqrt(Double(number))) {
        if number % i == 0 {
            count += 1
        }
    }
    return count == 1 ? true : false
}

var i = k
while true {
    if palind(i) && isPrime(i) {
        print(i)
        break
    }
    i += 1
}
