// Basic
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new Node("i");
first.next = new Node("am");
first.next.next = new Node("Kishore");
first.next.next.next = new Node("Reddy");

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let previews = current;
    if (!this.head) return undefined;
    while (current.next) {
      previews = current;
      current = current.next;
    }
    previews.next = null;
    this.length--;
    this.tail = previews;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let temp = 0;
    let node = this.head;
    while (temp !== index) {
      node = node.next;
      temp++;
    }
    return node;
  }

  set(val, index) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = new Node(val);
    prevNode.next.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previewNode = null;
    let nextNode;
    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = previewNode;
      previewNode = node;
      node = nextNode;
    }
    return this;
  }
}

const list = new SingleLinkedList();
