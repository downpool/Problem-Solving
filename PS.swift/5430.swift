// import Foundation

// let T = Int(readLine()!)!

// for _ in 0 ..< T {
//     let sets = readLine()!.map{String($0)}
//     let _ = readLine()
//     var arrays = readLine()!
//     arrays.removeFirst()
//     arrays.removeLast()
//     var array = arrays.split(separator: ",").map{String($0)}
//     var error = false
//     for i in sets {
//         if i == "R" {
//             array = [String](array.reversed())
//         } else if i == "D" {
//             if array.isEmpty {
//                 error = true
//                 continue
//             }else{
//                 array = [String](array.reversed())
//                 array.removeLast()
//                 array = [String](array.reversed())
//             }
//         }
//     }
//     if error {
//         print("error")
//     }else{
//         print("[\(array.joined(separator: ","))]")
//     }
// }

// import Foundation

// let T = Int(readLine()!)!

// for _ in 0 ..< T {
//     let sets = readLine()!.map{String($0)}
//     let _ = readLine()
//     var arrays = readLine()!
//     arrays.removeFirst()
//     arrays.removeLast()
//     var array = arrays.split(separator: ",").map{String($0)}
    
//     var isReversed = false
//     var error = false
    
//     for command in sets {
//         if command == "R" {
//             isReversed.toggle()
//         } else if command == "D" {
//             if array.isEmpty {
//                 error = true
//                 continue
//             }
//             if isReversed {
//                 array.removeLast()
//             } else {
//                 array.removeFirst()
//             }
//         }
//     }
    
//     if error {
//         print("error")
//     } else {
//         if isReversed {
//             array = [String](array.reversed())
//         }
//         print("[\(array.joined(separator: ","))]")
//     }
// }
// import Foundation
// func solve() {
//     let t = Int(readLine()!)!  // 테스트 케이스 수

//     for _ in 0..<t {
//         let commands = readLine()!  // 함수 시퀀스
//         let n = Int(readLine()!)!  // 배열의 크기
//         let arrayInput = readLine()!.trimmingCharacters(in: ["[", "]"]).split(separator: ",").compactMap { Int($0) }
        
//         var deque = ArraySlice(arrayInput)  // ArraySlice를 사용해 효율적으로 앞뒤에서 제거
//         var isReversed = false  // 현재 뒤집힌 상태인지 추적
//         var isError = false  // 에러 상태 여부
        
//         for command in commands {
//             if command == "R" {
//                 isReversed.toggle()  // 뒤집기 상태 토글
//             } else if command == "D" {
//                 if deque.isEmpty {
//                     isError = true  // 배열이 비어있을 때 D 명령
//                     break
//                 }
//                 if isReversed {
//                     deque.removeLast()  // 뒤집힌 상태에서는 뒤에서 제거
//                 } else {
//                     deque.removeFirst()  // 일반 상태에서는 앞에서 제거
//                 }
//             }
//         }
        
//         if isError {
//             print("error")
//         } else {
//             if isReversed {
//                 print("[\(deque.reversed().map { String($0) }.joined(separator: ","))]")  // 최종 출력
//             } else {
//                 print("[\(deque.map { String($0) }.joined(separator: ","))]")
//             }
//         }
//     }
// }

// // 실행
// solve()


import Foundation

let cases = Int(readLine()!)!

for _ in 0 ..< cases {
    let command = readLine()!.map{String($0)}

    let _ = readLine()!

    let input = readLine()!
    let trimmed = input.trimmingCharacters(in: CharacterSet(charactersIn: "[]"))  // 대괄호 제거
    let array = trimmed.split(separator: ",").compactMap { Int($0) }  // 문자열을 정수 배열로 변환
    for i in command {
        if i == "R"
    }
}