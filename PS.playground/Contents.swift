import Foundation

func solution(_ sum: String) -> [Int] {
    
    var lines = sum.split(separator: "\n")
    var stringS = lines[1].split(separator: "")
    var eCount: [Int] = []
    var answerArray: [Int] = []
    
    for x in stringS {
        if(x == "e") {
            eCount.append(1)
        } else {
            eCount.append(0)
        }
    }
    var lines2 = lines.suffix(lines.count - 2)
    
    for p in lines2 {
        var LR = p.split(separator: " ")
        var L: Int! = Int(LR[0])
        var R: Int! = Int(LR[1])
        var tempSum = 0
        for t in L ... R {
            tempSum += eCount[t - 1]
        }
        answerArray.append(tempSum)
    }
    
    return answerArray
}
