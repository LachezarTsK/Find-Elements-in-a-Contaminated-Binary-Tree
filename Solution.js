
class FindElements {

    #treeNodeValues = new Set();

    /**
     * @param {TreeNode} root
     */
    constructor(root) {
        if (root !== undefined && root !== null) {
            root.val = 0;
        }
        this.#recordTreeNodeValues(root);
    }

    /** 
     * @param {number} target
     * @return {boolean}
     */
    find(target) {
        return  this.#treeNodeValues.has(target);
    }

    /**
     * @param {TreeNode} root
     * @return {void}
     */
    #recordTreeNodeValues(root) {
        if (root !== null) {
            this.#treeNodeValues.add(root.val);

            if (root.left !== null) {
                root.left.val = 2 * root.val + 1;
                this.#recordTreeNodeValues(root.left);
            }
            if (root.right !== null) {
                root.right.val = 2 * root.val + 2;
                this.#recordTreeNodeValues(root.right);
            }
        }
    }
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
