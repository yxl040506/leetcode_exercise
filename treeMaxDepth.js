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

var maxDepth = function(root) {
    let leftDepth = 0
    let rightDepth = 0
    let depth = 0
    if(root) {
        depth += 1
        if(root.left) {
            leftDepth += maxDepth(root.left)
        }
        if(root.right) {
            rightDepth += maxDepth(root.right)
        }
    }
    depth += leftDepth > rightDepth ? leftDepth : rightDepth
    return depth
};