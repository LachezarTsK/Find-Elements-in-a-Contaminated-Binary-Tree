
using System;
using System.Collections.Generic;

public class FindElements
{
    private readonly HashSet<int> treeNodeValues = new HashSet<int>();

    public FindElements(TreeNode root)
    {
        if (root != null)
        {
            root.val = 0;
        }
        RecordTreeNodeValues(root);
    }

    public bool Find(int target)
    {
        return treeNodeValues.Contains(target);
    }

    private void RecordTreeNodeValues(TreeNode root)
    {
        if (root != null)
        {
            treeNodeValues.Add(root.val);

            if (root.left != null)
            {
                root.left.val = 2 * root.val + 1;
                RecordTreeNodeValues(root.left);
            }
            if (root.right != null)
            {
                root.right.val = 2 * root.val + 2;
                RecordTreeNodeValues(root.right);
            }
        }
    }
}


/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;

    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
