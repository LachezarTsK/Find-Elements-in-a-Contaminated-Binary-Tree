
#include <unordered_set>
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
 */
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class FindElements {

    unordered_set<int> treeNodeValues;

public:
    FindElements(TreeNode* root) {
        if (root != nullptr) {
            root->val = 0;
        }
        recordTreeNodeValues(root);
    }

    bool find(int target) const {
        return treeNodeValues.contains(target);
    }

private:
    void recordTreeNodeValues(TreeNode* root) {
        if (root != nullptr) {
            treeNodeValues.insert(root->val);

            if (root->left != nullptr) {
                root->left->val = 2 * root->val + 1;
                recordTreeNodeValues(root->left);
            }
            if (root->right != nullptr) {
                root->right->val = 2 * root->val + 2;
                recordTreeNodeValues(root->right);
            }
        }
    }
};
