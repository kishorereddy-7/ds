class DNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new DNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let temp = null;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count++;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node !== null) {
      node.val = val;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) !!this.push(val);
    if (index === 0) !!this.unshift(val);

    let newNode = new Node(val);
    let indexNode = this.get(index);
    let prevNode = indexNode.prev;

    prevNode.next = newNode;
    indexNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = indexNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) this.pop();

    let removeNode = this.get(index);
    let prevNode = removeNode.prev;
    let nextNode = removeNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.removeNode.next = null;
    this.removeNode.prev = null;
    this.length--;
    return true;
  }
}

const a = new DoublyLinkedList();
a.push(1);
a.push(2);
a.push(3);
