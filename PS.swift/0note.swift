//Queue
struct Queue<T> {
    private var elements: [T] = []

    // 큐에 요소를 추가 (enqueue)
    mutating func enqueue(_ element: T) {
        elements.append(element)
    }

    // 큐에서 요소를 제거하고 반환 (dequeue)
    mutating func dequeue() -> T? {
        return elements.isEmpty ? nil : elements.removeFirst()
    }

    // 큐의 첫 번째 요소를 반환 (peek)
    func peek() -> T? {
        return elements.first
    }

    // 큐가 비어있는지 확인
    var isEmpty: Bool {
        return elements.isEmpty
    }

    // 큐의 크기 반환
    var count: Int {
        return elements.count
    }
}

//Stack
struct Stack<T> {
    private var elements: [T] = []

    // 스택에 요소를 추가 (push)
    mutating func push(_ element: T) {
        elements.append(element)
    }

    // 스택에서 요소를 제거하고 반환 (pop)
    mutating func pop() -> T? {
        return elements.popLast()
    }

    // 스택의 마지막 요소를 확인 (peek)
    func peek() -> T? {
        return elements.last
    }

    // 스택이 비어있는지 확인
    var isEmpty: Bool {
        return elements.isEmpty
    }

    // 스택의 크기 반환
    var count: Int {
        return elements.count
    }
}
//Heap
struct Heap<T: Comparable> {
    private var elements: [T] = []
    private let sort: (T, T) -> Bool

    // 힙 초기화: 최소 힙 또는 최대 힙
    init(sort: @escaping (T, T) -> Bool) {
        self.sort = sort
    }

    // 힙이 비어있는지 확인
    var isEmpty: Bool {
        return elements.isEmpty
    }

    // 힙의 크기 반환
    var count: Int {
        return elements.count
    }

    // 힙의 루트 요소 반환
    func peek() -> T? {
        return elements.first
    }

    // 요소 추가 (insert)
    mutating func insert(_ value: T) {
        elements.append(value)
        siftUp(from: elements.count - 1)
    }

    // 루트 요소 제거 (remove)
    mutating func remove() -> T? {
        guard !elements.isEmpty else { return nil }
        if elements.count == 1 {
            return elements.removeFirst()
        } else {
            let root = elements[0]
            elements[0] = elements.removeLast()
            siftDown(from: 0)
            return root
        }
    }

    // siftUp: 새로운 요소가 들어왔을 때 정렬 유지
    private mutating func siftUp(from index: Int) {
        var childIndex = index
        let child = elements[childIndex]
        var parentIndex = (childIndex - 1) / 2

        while childIndex > 0 && sort(child, elements[parentIndex]) {
            elements[childIndex] = elements[parentIndex]
            childIndex = parentIndex
            parentIndex = (childIndex - 1) / 2
        }

        elements[childIndex] = child
    }

    // siftDown: 루트 요소를 제거했을 때 정렬 유지
    private mutating func siftDown(from index: Int) {
        var parentIndex = index
        let count = elements.count

        while true {
            let leftChildIndex = 2 * parentIndex + 1
            let rightChildIndex = 2 * parentIndex + 2
            var optionalSwapIndex: Int?

            if leftChildIndex < count && sort(elements[leftChildIndex], elements[parentIndex]) {
                optionalSwapIndex = leftChildIndex
            }

            if rightChildIndex < count,
               let swapIndex = optionalSwapIndex,
               sort(elements[rightChildIndex], elements[swapIndex]) {
                optionalSwapIndex = rightChildIndex
            } else if rightChildIndex < count && optionalSwapIndex == nil {
                optionalSwapIndex = rightChildIndex
            }

            guard let swapIndex = optionalSwapIndex, sort(elements[swapIndex], elements[parentIndex]) else {
                break
            }

            elements.swapAt(parentIndex, swapIndex)
            parentIndex = swapIndex
        }
    }
}
//Deque
struct Deque<T> {
    private var elements: ArraySlice<T> = []

    var isEmpty: Bool {
        return elements.isEmpty
    }

    var count: Int {
        return elements.count
    }

    func peekFront() -> T? {
        return elements.first
    }

    func peekBack() -> T? {
        return elements.last
    }

    mutating func appendFront(_ element: T) {
        elements = [element] + elements
    }

    mutating func appendBack(_ element: T) {
        elements.append(element)
    }

    mutating func removeFront() -> T? {
        guard !isEmpty else { return nil }
        return elements.removeFirst()
    }

    mutating func removeBack() -> T? {
        guard !isEmpty else { return nil }
        return elements.removeLast()
    }
}
