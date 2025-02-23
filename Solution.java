
import java.util.HashSet;
import java.util.Set;

public class FindElements {

    private final Set<Integer> treeNodeValues = new HashSet<>();

    public FindElements(TreeNode root) {
        if (root != null) {
            root.val = 0;
        }
        recordTreeNodeValues(root);
    }

    public boolean find(int target) {
        return treeNodeValues.contains(target);
    }

    private void recordTreeNodeValues(TreeNode root) {
        if (root != null) {
            treeNodeValues.add(root.val);

            if (root.left != null) {
                root.left.val = 2 * root.val + 1;
                recordTreeNodeValues(root.left);
            }
            if (root.right != null) {
                root.right.val = 2 * root.val + 2;
                recordTreeNodeValues(root.right);
            }
        }
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
