const LinkedList = require('./linkedlist');

class Stack {
  constructor() {
    this._list = new LinkedList();
  }

  /** Push a new value onto the stack */
  push(val) {
    this._list.unshift(val);
    return this._list.length; // Return the size of the stack after pushing
  }

  /** Pop the value from the stack and return it */
  pop() {
    return this._list.shift();
  }

  /** Peek at the top value of the stack */
  peek() {
    return this._list.peek();
  }

  /** Check if the stack is empty */
  isEmpty() {
    return this._list.isEmpty();
  }

  /** Get the size of the stack */
  get size() {
    return this._list.length;
  }
}

module.exports = Stack;
