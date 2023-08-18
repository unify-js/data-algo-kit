import test from "node:test";
import assert from "node:assert/strict";

import { ArrayStack } from "./ArrayStack.js";

test("ArrayStack: empty stack", () => {
  const stack = new ArrayStack();

  assert.strictEqual(stack.isEmpty, true);
  assert.strictEqual(stack.size, 0);

  const popped = stack.pop();
  assert.strictEqual(popped, undefined);

  const peeked = stack.peek();
  assert.strictEqual(peeked, undefined);
});

test("ArrayStack: should push elements onto the stack", () => {
  const stack = new ArrayStack();

  stack.push(1);
  stack.push(2);

  assert.strictEqual(stack.isEmpty, false);
  assert.strictEqual(stack.size, 2);
});

test("ArrayStack: should pop elements from the stack", () => {
  const stack = new ArrayStack();

  stack.push(1);
  stack.push(2);

  const popped = stack.pop();

  assert.strictEqual(popped, 2);
  assert.strictEqual(stack.size, 1);
});

test("ArrayStack: should peek at the top element without removing it", () => {
  const stack = new ArrayStack();

  stack.push(1);
  stack.push(2);

  const peeked = stack.peek();

  assert.strictEqual(peeked, 2);
  assert.strictEqual(stack.size, 2);
});
