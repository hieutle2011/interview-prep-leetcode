/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {

  const helper = (preorder, start, end) => {
    if (start > end) return null;

    // make a root node
    const node = new TreeNode(preorder[start])

    // find index i where values < node.val
    let i
    for (i = start; i <= end; i++) {
      if (preorder[i] > node.val) break;
    }
    
    // make the left subtree
    node.left = helper(preorder, start + 1, i - 1);

    // make the right subtree
    node.right = helper(preorder, i, end);

    return node
  }

  return helper(preorder, 0, preorder.length - 1)
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = bstFromPreorder