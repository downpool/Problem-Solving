import Foundation

//N과 M을 입력받는다
var NandM = readLine()!.split(separator: " ").map { Int(String($0))! }
//문자열을 입력받고 ""으로 분리한다.
var stringS = Array(readLine()!)
var eCount: [Int] = [0]
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
