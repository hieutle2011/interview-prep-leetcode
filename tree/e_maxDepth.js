/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    const left_len = maxDepth(root.left)
    const right_len = maxDepth(root.right)
    const max = left_len >= right_len ? left_len : right_len
    return max + 1
};

module.exports = maxDepth