
class FindElements(root: TreeNode?) {

    private val treeNodeValues = HashSet<Int>()

    init {
        if (root != null) {
            root.`val` = 0
        }
        recordTreeNodeValues(root)
    }

    fun find(target: Int): Boolean {
        return treeNodeValues.contains(target)
    }

    private fun recordTreeNodeValues(root: TreeNode?) {
        if (root != null) {
            treeNodeValues.add(root.`val`)

            if (root.left != null) {
                root.left!!.`val` = 2 * root.`val` + 1
                recordTreeNodeValues(root.left)
            }
            if (root.right != null) {
                root.right!!.`val` = 2 * root.`val` + 2
                recordTreeNodeValues(root.right)
            }
        }
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this class.
 */
class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}
