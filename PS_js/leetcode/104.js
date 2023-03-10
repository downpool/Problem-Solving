/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let queue = [root];
    let depth = 0;
    while (queue.length) {
        depth++;
        //길이 고정!!
        let leng = queue.length;
        for (let i = 0; i < leng; i++) {
            let node = queue.shift();
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
    }
    return depth;
};
var maxDepth = function (root) {
    if (root === null) return 0
    let depth = 0
    const queue = [root]
    while (queue.length) {
        depth += 1
        const len = queue.length
        for (let i = 0; i < len; i += 1) {
            const curr = queue.shift()
            if (curr.left !== null) queue.push(curr.left)
            if (curr.right !== null) queue.push(curr.right)
        }
    }
    return depth
};