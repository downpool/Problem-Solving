import Foundation

func solution(_ input: String) -> Int {
    let popAndPush: String = "raise"
    var tower: [Int] = []
    
    var lines = input.split(separator: "\n")
    let N: Int! = Int(lines[0].split(separator: " ")[0])
    
    for x in 1 ... N {
        tower.append(x)
    }
    
    var movement = lines.suffix(lines.count - 1)
    
    for x in movement {
        if (x == popAndPush) {
            tower.append(tower.first!)
            tower.removeFirst()
        } else {
            tower.removeFirst()
        }
    }
    return tower.first!
}
