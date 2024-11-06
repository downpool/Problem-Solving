import Foundation

let n = Int(readLine()!)!

func gn(_ x: Int) -> UInt {
    var un = UInt(x * x)  // UInt 타입으로 초기화
    for i in 1 ... x {
        un -= UInt(x % i)
    }
    return un
}

for _ in 0 ..< n {
    let number = Int(readLine()!)!
    print(gn(number))
}
// import Foundation

// // 상수 최대값 설정
// let maxN = 1000000

// // 약수의 합을 저장할 배열
// var divisorSum = [Int](repeating: 0, count: maxN + 1)

// // 1부터 maxN까지 각 수의 약수 합 계산
// for i in 1...maxN {
//     for j in stride(from: i, through: maxN, by: i) {
//         divisorSum[j] += i
//     }
// }

// // f(n) 값의 누적 합을 저장할 배열
// var cumulativeSum = [Int](repeating: 0, count: maxN + 1)
// for i in 1...maxN {
//     cumulativeSum[i] = cumulativeSum[i - 1] + divisorSum[i]
// }

// // 입력 처리
// let t = Int(readLine()!)!
// var results = [String]()
// for _ in 0..<t {
//     let n = Int(readLine()!)!
//     results.append(String(cumulativeSum[n]))
// }

// // 결과 출력
// print(results.joined(separator: "\n"))
