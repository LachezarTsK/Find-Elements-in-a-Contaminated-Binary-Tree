
package main

/*
Struct TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
*/
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

type FindElements struct {
    treeNodeValues HashSet
}

func Constructor(root *TreeNode) FindElements {
    if root != nil {
        root.Val = 0
    }

    findElements := FindElements{
        treeNodeValues: NewHashSet(),
    }
    findElements.recordTreeNodeValues(root)

    return findElements
}

func (this *FindElements) Find(target int) bool {
    return this.treeNodeValues.Contains(target)
}

func (this *FindElements) recordTreeNodeValues(root *TreeNode) {
    if root != nil {
        this.treeNodeValues.Add(root.Val)

        if root.Left != nil {
            root.Left.Val = 2*root.Val + 1
            this.recordTreeNodeValues(root.Left)
        }
        if root.Right != nil {
            root.Right.Val = 2*root.Val + 2
            this.recordTreeNodeValues(root.Right)
        }
    }
}

type HashSet struct {
    conainer map[any]bool
}

func NewHashSet() HashSet {
    return HashSet{conainer: map[any]bool{}}
}

func (this HashSet) Contains(element any) bool {
    return this.conainer[element]
}

func (this HashSet) Add(element any) {
    this.conainer[element] = true
}

func (this HashSet) Remove(element any) {
    delete(this.conainer, element)
}
