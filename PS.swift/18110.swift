import Foundation

// 입력 받기
let n = Int(readLine()!)!

if n == 0 {
    print(0)
} else {
    var arr: [Int] = []
    
    for _ in 0..<n {
        let temp = Int(readLine()!)!
        arr.append(temp)
    }
    
    arr.sort()  // 정렬
    
    let slash = Int(round(Double(n) * 0.15))
    
    // 슬라이싱을 이용해 15% 제거
    let trimmedArr = arr[slash..<(n - slash)]
    
    // 평균 계산
    let sum = trimmedArr.reduce(0, +)
    let average = Double(sum) / Double(trimmedArr.count)
    
    print(Int(round(average)))
}
