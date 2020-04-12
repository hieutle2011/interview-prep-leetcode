// Given a binary tree, you need to compute the length of the diameter of the tree. 
// The diameter of a binary tree is the length of the longest path between any two 
// nodes in a tree. This path may or may not pass through the root. 

const maxDepth = require('../tree/e_maxDepth')
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
var diameterOfBinaryTree = function (root) {
    if (!root) return 0
    const ldepth = maxDepth(root.left)
    const rdepth = maxDepth(root.right)

    const ldiameter = diameterOfBinaryTree(root.left)
    const rdiameter = diameterOfBinaryTree(root.right)

    return Math.max(ldepth + rdepth, Math.max(ldiameter, rdiameter))
};

module.exports = diameterOfBinaryTree

// var diameterOfBinaryTree = function(root) {
//     if (root == null) {
//         return 0;
//     }

//     if (root.left == null && root.right == null) {
//         return 0;
//     }

//     let ans = 0;

//     const longPath = node => {
//         if (node == null) {
//             return -1;
//         }

//         const lPath = longPath(node.left) + 1;
//         const rPath = longPath(node.right) + 1;

//         // longest path pass through "node" using both left and right
//         ans = Math.max(ans, lPath + rPath);

//         // longest path section along the node
//         return Math.max(lPath, rPath);
//     } 

//     longPath(root);

//     return ans;
// };