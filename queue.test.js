const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue adds an item to the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue removes and returns the item at the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test('dequeue throws an error if the queue is empty', () => {
    expect(() => queue.dequeue()).toThrow('List is empty');
  });

  test('peek returns the item at the front of the queue without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('peek throws an error if the queue is empty', () => {
    expect(() => queue.peek()).toThrow('List is empty');
  });

  test('isEmpty returns true for empty queues', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('isEmpty returns false for nonempty queues', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
