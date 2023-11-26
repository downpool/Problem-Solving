import Foundation

//final class FileIO {
//    private let buffer:[UInt8]
//    private var index: Int = 0
//
//    init(fileHandle: FileHandle = FileHandle.standardInput) throws {
//        buffer = Array(try fileHandle.readToEnd() ?? Data()) + [UInt8.zero]
//    }
//
//    @inline(__always) private func read() -> UInt8 {
//        defer { index += 1 }
//
//        return buffer[index]
//    }
//
//    @inline(__always) func readInt() -> Int {
//        var sum = 0
//        var now = read()
//        var isPositive = true
//
//        while now == 10
//                || now == 32 { now = read() } // 공백과 줄바꿈 무시
//        if now == 45 { isPositive.toggle(); now = read() } // 음수 처리
//        while now >= 48, now <= 57 {
//            sum = sum * 10 + Int(now-48)
//            now = read()
//        }
//
//        return sum * (isPositive ? 1:-1)
//    }
//
//    @inline(__always) func readString() -> String {
//        var now = read()
//
//        while now == 10 || now == 32 { now = read() } // 공백과 줄바꿈 무시
//        let beginIndex = index-1
//
//        while now != 10,
//              now != 32,
//              now != 0 { now = read() }
//
//        return String(bytes: Array(buffer[beginIndex..<(index-1)]), encoding: .ascii)!
//    }
//}


//let io = try! FileIO()

//N과 M을 입력받는다
var NandM = readLine()!.split(separator: " ").map { Int(String($0))! }
//문자열을 입력받고 ""으로 분리한다.
var stringS = Array(readLine()!)
var eCount: [Int] = []
var answerArray: [Int] = []
   
//각 순서에 맞게 e면 1을 넣고 아니면 0을 넣는다.
for x in stringS {
    if(x == "e") {
        eCount.append(1)
    } else {
        eCount.append(0)
    }
}

//M번 반복한다
for _ in 0 ..< NandM[1] {
    //배열 인덱스를 생각하여 -1을 해준다
    let LandR = readLine()!.split(separator: " ").map { Int(String($0))! }
    var temp = 0;
    //L부터 R까지 루프를 돌며 eCount에 저장된 값이 1이면 temp에 +1을 해준다
    for p in LandR[0] ... LandR[1] {
        if(eCount[p] == 1){
            temp += 1
        }
    }
    //최종값을 answerArray에 push한다.
    answerArray.append(temp)
}
//출력
print(answerArray)
