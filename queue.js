const LinkedList = require('./linkedlist');

class Queue {
  constructor() {
    this._list = new LinkedList();
  }

  /** Add an item to the end of the queue */
  enqueue(item) {
    this._list.push(item);
  }

  /** Remove and return the item at the front of the queue */
  dequeue() {
    return this._list.shift();
  }

  /** Return the item at the front of the queue without removing it */
  peek() {
    return this._list.peek();
  }

  /** Check if the queue is empty */
  isEmpty() {
    return this._list.isEmpty();
  }

  /** Get the size of the queue */
  get size() {
    return this._list.length;
  }
}

module.exports = Queue;
