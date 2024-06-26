const Node = require('./Node');

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a new node to the circular linked list
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Point back to the head
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove a node from the circular linked list
  remove(node) {
    if (this.length === 0) return;

    let current = this.head;
    let previous = this.tail;

    while (current !== node) {
      previous = current;
      current = current.next;
    }

    if (current === this.head) {
      this.head = this.head.next;
      this.tail.next = this.head;
    } else if (current === this.tail) {
      this.tail = previous;
      this.tail.next = this.head;
    } else {
      previous.next = current.next;
    }

    this.length--;
    return current.value;
  }
}

module.exports = CircularLinkedList;
