import Foundation

struct MinHeap {
    var heap: [Int] = []
    
    init() {
        heap.append(0) // 인덱스 0은 사용하지 않음
    }
    
    mutating func insert(_ value: Int) {
        heap.append(value)
        var currentIndex = heap.count - 1
        
        while currentIndex > 1 && heap[currentIndex] < heap[currentIndex / 2] {
            heap.swapAt(currentIndex, currentIndex / 2)
            currentIndex /= 2
        }
    }
    
    mutating func remove() -> Int {
        if heap.count <= 1 {
            return 0
        }
        let minValue = heap[1]
        heap[1] = heap[heap.count - 1]
        heap.removeLast()
        
        var currentIndex = 1
        while true {
            let left = currentIndex * 2
            let right = currentIndex * 2 + 1
            var smallest = currentIndex
            
            if left < heap.count && heap[left] < heap[smallest] {
                smallest = left
            }
            if right < heap.count && heap[right] < heap[smallest] {
                smallest = right
            }
            if smallest == currentIndex {
                break
            }
            heap.swapAt(currentIndex, smallest)
            currentIndex = smallest
        }
        
        return minValue
    }
}

let n = Int(readLine()!)!
var heap = MinHeap()
var result = ""

for _ in 0..<n {
    let value = Int(readLine()!)!
    if value == 0 {
        result += "\(heap.remove())\n"
    } else {
        heap.insert(value)
    }
}

print(result)
