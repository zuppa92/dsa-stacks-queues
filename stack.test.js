const Stack = require('./stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push places the value at the top of the stack and returns the size', () => {
    expect(stack.push(10)).toBe(1);
    expect(stack.peek()).toBe(10);
    expect(stack.push(100)).toBe(2);
    expect(stack.peek()).toBe(100);
  });

  test('pop removes and returns the value of the node removed', () => {
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    var removed = stack.pop();
    expect(removed).toBe(1000);
    expect(stack.size).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(0);
  });

  test('pop throws an error if the stack is empty', () => {
    expect(() => stack.pop()).toThrow(Error);
  });

  test('peek returns the value at the start of the stack', () => {
    stack.push(3);
    expect(stack.peek()).toBe(3);
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  test('peek throws an error if the stack is empty', () => {
    expect(() => stack.peek()).toThrow(Error);
  });

  test('isEmpty returns true for empty stacks', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('isEmpty returns false for nonempty stacks', () => {
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
  });
});
