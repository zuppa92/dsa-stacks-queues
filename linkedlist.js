class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /** Add a new value to the end of the list */
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
  }

  /** Add a new value to the start of the list */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** Remove and return the value from the start of the list */
  shift() {
    if (!this.head) throw new Error("List is empty");
    const val = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return val;
  }

  /** Return the value from the start of the list without removing it */
  peek() {
    if (!this.head) throw new Error("List is empty");
    return this.head.val;
  }

  /** Check if the list is empty */
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = LinkedList;
