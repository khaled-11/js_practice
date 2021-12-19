/*
A binary tree is a tree which is characterized by one of 
the following properties:

-It can be empty (null).
-It contains a root node only.
-It contains a root node with a left subtree, 
a right subtree, or both. These subtrees are also 
binary trees.

In-order traversal is performed as

-Traverse the left subtree.
-Visit root.
-Traverse the right subtree.

For this in-order traversal, start from the left 
child of the root node and keep exploring the left 
subtree until you reach a leaf. When you reach a leaf,
back up to its parent, check for a right child and 
visit it if there is one. If there is not a child, 
you've explored its left and right subtrees fully. 
If there is a right child, traverse its left subtree 
then its right in the same manner. Keep doing this 
until you have traversed the entire tree. You will 
only store the values of a node as you visit when one 
of the following is true:

-it is the first node visited, the first time visited
-it is a leaf, should only be visited once
-all of its subtrees have been explored, should only be 
visited once while this is true 
-it is the root of the tree, the first time visited 

Swapping: Swapping subtrees of a node means that if 
initially node has left subtree L and right subtree R, 
then after swapping, the left subtree will be R and 
the right subtree, L.

For example, in the following tree, we swap children 
of node 1.


In-order traversal of left tree is 2 4 1 3 5 and of 
right tree is 3 5 1 2 4
*/

class Node {
    constructor(data, depth) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.depth = depth;
    }
}
var nodes = [new Node(1, 1)];

function createNode(value, root, position) {
    if (value > -1) {
        const depth = root.depth + 1;
        const node = new Node(value, depth);
        root[position] = node;
        nodes.push(node);
    }
}

function swapNode(k) {
    const temp = nodes[k].left;
    nodes[k].left = nodes[k].right;
    nodes[k].right = temp;
}

function inOrder(_root) {
    const result = [];
    const action = root => {
      if (root !== null) {
        action(root.left);
        result.push(root.data);
        action(root.right);
      }
    };
    action(_root);
    return result;
}

/*
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY indexes
 *  2. INTEGER_ARRAY queries
 */

function swapNodes(indexes, queries) {
    // Write your code here
    var response = [];

    for (let i = 0; i < indexes.length; i++) {
        createNode(indexes[i][0], nodes[i], "left");
        createNode(indexes[i][1], nodes[i], "right");
    }

    for (let i = 0; i < queries.length; i++) {
        const jump = queries[i];
        for (let k = 0; k < nodes.length; k++) {
            const node = nodes[k];
            if (0 === node.depth % jump) {
                swapNode(k);
            }
        }
        response[response.length] = inOrder(nodes[0]);
    }
    return response;
}