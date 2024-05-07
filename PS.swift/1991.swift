import Foundation

struct Node {
    let left: String
    let right: String
}

let n = Int(readLine()!)!
var tree: [String: Node] = [:]
for _ in 0 ..< n {
    let input = readLine()!.split(separator: " ").map{String($0)}
    tree[input[0]] = Node(left: input[1], right: input[2])
}

preorder("A")
print()
inorder("A")
print()
postorder("A")

func preorder(_ t: String) {
    if t == "."{
        return
    }
    print(t, terminator: "")
    preorder(tree[t]!.left)
    preorder(tree[t]!.right)
}
func inorder(_ t: String) {
    if t == "."{
        return
    }
    inorder(tree[t]!.left)
    print(t, terminator: "")
    inorder(tree[t]!.right)
}

func postorder(_ t: String) {
    if t == "."{
        return
    }
    postorder(tree[t]!.left)
    postorder(tree[t]!.right)
    print(t, terminator: "")
}
