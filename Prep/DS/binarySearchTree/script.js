console.clear();
console.log("Binary Search Tree");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if there is no left node append new node
        if (!node.left) {
          node.left = newNode;
        }
        // if there is left node, look left again
        else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if there is no right node append new node
        if (!node.right) {
          node.right = newNode;
        }
        // if there is right node, look right again
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    // continue traversing left until there are no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    // continue traversing right until there are no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // Searching algos
  // DFS - Branch by Branch
  // InOrder - Left, Root, Right
  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      // If left node exists go left again
      if (node.left) traverse(node.left);
      // Capture root node value
      result.push(node.value);
      // If right node exists go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // PreOrder - Root, Left, Right
  dfsPreOrder() {
    let result = [];
    const traverse = (node) => {
      // Capture root node value
      result.push(node.value);
      // If left node exists go left again
      if (node.left) traverse(node.left);
      // If right node exists go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // PostOrder - Left, Right, Root
  dfsPostOrder() {
    let result = [];
    const traverse = (node) => {
      // If left node exists go left again
      if (node.left) traverse(node.left);
      // If right node exists go right again
      if (node.right) traverse(node.right);
      // Capture root node value
      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }

  // BFS - Level by Level
  // Use a queue
  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

const bst = new BST(17);

bst.insert(15);
bst.insert(14);
bst.insert(11);
bst.insert(12);
bst.insert(10);
bst.insert(8);
bst.insert(4);
bst.insert(1);
bst.insert(24);
bst.insert(21);
bst.insert(19);

console.log(bst);

console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
console.log(bst.contains(2));
console.log(bst.contains(21));

console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());

console.log(bst.bfs());
