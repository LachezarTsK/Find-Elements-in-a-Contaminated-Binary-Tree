
class FindElements {

    private treeNodeValues = new Set<number>();

    constructor(root: TreeNode | null) {
        if (root !== undefined && root !== null) {
            root.val = 0;
        }
        this.recordTreeNodeValues(root);
    }

    find(target: number): boolean {
        return this.treeNodeValues.has(target);
    }

    private recordTreeNodeValues(root: TreeNode | null): void {
        if (root !== null) {
            this.treeNodeValues.add(root.val);

            if (root.left !== null) {
                root.left.val = 2 * root.val + 1;
                this.recordTreeNodeValues(root.left);
            }
            if (root.right !== null) {
                root.right.val = 2 * root.val + 2;
                this.recordTreeNodeValues(root.right);
            }
        }
    }
}


/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
