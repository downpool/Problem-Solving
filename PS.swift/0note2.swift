import Foundation

struct Edge {
    let to: Int
    let weight: Int
}

func dijkstra(start: Int, graph: [[Edge]], nodeCount: Int) -> [Int] {
    // 최단 거리 테이블 초기화
    var distances = [Int](repeating: Int.max, count: nodeCount)
    distances[start] = 0

    // 우선순위 큐 사용 (최소 힙)
    var priorityQueue = [(node: Int, distance: Int)]() // (노드, 거리)
    priorityQueue.append((start, 0))

    while !priorityQueue.isEmpty {
        // 현재 노드 중 최소 거리 노드 추출
        priorityQueue.sort { $0.distance < $1.distance } // 우선순위 큐 동작
        let current = priorityQueue.removeFirst()

        // 이미 처리된 노드라면 스킵
        if current.distance > distances[current.node] {
            continue
        }

        // 인접 노드들에 대해 최단 거리 갱신
        for edge in graph[current.node] {
            let newDistance = current.distance + edge.weight

            if newDistance < distances[edge.to] {
                distances[edge.to] = newDistance
                priorityQueue.append((edge.to, newDistance))
            }
        }
    }

    return distances
}

struct MinHeap<T: Comparable> {
    private var elements: [T] = []

    var isEmpty: Bool {
        return elements.isEmpty
    }

    var count: Int {
        return elements.count
    }

    func peek() -> T? {
        return elements.first
    }

    mutating func insert(_ value: T) {
        elements.append(value)
        siftUp(from: elements.count - 1)
    }

    mutating func remove() -> T? {
        guard !isEmpty else { return nil }
        if elements.count == 1 {
            return elements.removeFirst()
        } else {
            let root = elements[0]
            elements[0] = elements.removeLast()
            siftDown(from: 0)
            return root
        }
    }

    private mutating func siftUp(from index: Int) {
        var childIndex = index
        let child = elements[childIndex]
        var parentIndex = (childIndex - 1) / 2

        while childIndex > 0 && child < elements[parentIndex] {
            elements[childIndex] = elements[parentIndex]
            childIndex = parentIndex
            parentIndex = (childIndex - 1) / 2
        }

        elements[childIndex] = child
    }

    private mutating func siftDown(from index: Int) {
        var parentIndex = index
        let count = elements.count

        while true {
            let leftChildIndex = 2 * parentIndex + 1
            let rightChildIndex = 2 * parentIndex + 2
            var optionalSwapIndex: Int?

            if leftChildIndex < count && elements[leftChildIndex] < elements[parentIndex] {
                optionalSwapIndex = leftChildIndex
            }

            if rightChildIndex < count,
               let swapIndex = optionalSwapIndex,
               elements[rightChildIndex] < elements[swapIndex] {
                optionalSwapIndex = rightChildIndex
            } else if rightChildIndex < count && optionalSwapIndex == nil {
                optionalSwapIndex = rightChildIndex
            }

            guard let swapIndex = optionalSwapIndex, elements[swapIndex] < elements[parentIndex] else {
                break
            }

            elements.swapAt(parentIndex, swapIndex)
            parentIndex = swapIndex
        }
    }
}

import Foundation

struct Edge {
    let to: Int
    let weight: Int
}

func dijkstraWithMinHeap(start: Int, graph: [[Edge]]) -> [Int] {
    let nodeCount = graph.count
    var distances = [Int](repeating: Int.max, count: nodeCount) // 최단 거리 테이블
    distances[start] = 0

    var minHeap = MinHeap<(distance: Int, node: Int)>() // Min-Heap
    minHeap.insert((distance: 0, node: start))

    while !minHeap.isEmpty {
        guard let current = minHeap.remove() else { break }

        let currentDistance = current.distance
        let currentNode = current.node

        // 현재 노드가 이미 처리된 경우 스킵
        if currentDistance > distances[currentNode] {
            continue
        }

        // 현재 노드의 모든 이웃 탐색
        for edge in graph[currentNode] {
            let newDistance = currentDistance + edge.weight

            // 더 짧은 경로가 발견되면 갱신
            if newDistance < distances[edge.to] {
                distances[edge.to] = newDistance
                minHeap.insert((distance: newDistance, node: edge.to))
            }
        }
    }

    return distances
}

//벨만 - 포드
struct Edge {
    let from: Int
    let to: Int
    let weight: Int
}

func bellmanFord(start: Int, nodeCount: Int, edges: [Edge]) -> ([Int], Bool) {
    // 최단 거리 테이블 초기화
    var distances = [Int](repeating: Int.max, count: nodeCount)
    distances[start] = 0

    // N-1번 반복 (노드 수 - 1)
    for _ in 0..<nodeCount - 1 {
        for edge in edges {
            if distances[edge.from] != Int.max && distances[edge.from] + edge.weight < distances[edge.to] {
                distances[edge.to] = distances[edge.from] + edge.weight
            }
        }
    }

    // 음수 사이클 확인 (추가 루프)
    var hasNegativeCycle = false
    for edge in edges {
        if distances[edge.from] != Int.max && distances[edge.from] + edge.weight < distances[edge.to] {
            hasNegativeCycle = true
            break
        }
    }

    return (distances, hasNegativeCycle)
}

//플로이드 워셜

import Foundation

func floydWarshall(nodeCount: Int, graph: inout [[Int]]) -> [[Int]]? {
    let INF = Int.max / 2 // 무한대 값 (Int.max로 설정하면 오버플로 위험)

    // 플로이드-워셜 알고리즘
    for k in 0..<nodeCount {
        for i in 0..<nodeCount {
            for j in 0..<nodeCount {
                if graph[i][k] != INF && graph[k][j] != INF {
                    graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
                }
            }
        }
    }

    // 음수 사이클 확인
    for i in 0..<nodeCount {
        if graph[i][i] < 0 {
            return nil // 음수 사이클 발견
        }
    }

    return graph
}
