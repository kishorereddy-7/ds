class BNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new BNode(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found ? current : undefined;
  }

  BreadthFirstSearch() {
    let node = this.root;
    const data = [];
    const que = [];
    que.push(node);
    while (que.length) {
      node = que.shift();
      data.push(node.val);
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(6);
tree.insert(10);
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.insert(8);
tree.insert(15);
