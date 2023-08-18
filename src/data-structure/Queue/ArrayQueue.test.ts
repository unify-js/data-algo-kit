import test from "node:test";
import assert from "node:assert/strict";

import { ArrayQueue } from "./ArrayQueue.js";

test("ArrayQueue: empty", () => {
  const queue = new ArrayQueue();

  assert.strictEqual(queue.size, 0);
  assert.strictEqual(queue.isEmpty, true);
});

test("ArrayQueue: enqueue", () => {
  const queue = new ArrayQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  assert.strictEqual(queue.size, 3);
  assert.strictEqual(queue.isEmpty, false);
});

test("ArrayQueue: dequeue", () => {
  const queue = new ArrayQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);

  assert.strictEqual(queue.dequeue(), 1);
  assert.strictEqual(queue.size, 1);
});

test("ArrayQueue: enqueue and dequeue", () => {
  const queue = new ArrayQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  assert.strictEqual(queue.dequeue(), 1);
  assert.strictEqual(queue.dequeue(), 2);

  queue.enqueue(4);
  queue.enqueue(5);

  assert.strictEqual(queue.dequeue(), 3);
  assert.strictEqual(queue.dequeue(), 4);
  assert.strictEqual(queue.dequeue(), 5);
  assert.strictEqual(queue.dequeue(), undefined);
});

test("ArrayQueue: getFront", () => {
  const queue = new ArrayQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);

  assert.strictEqual(queue.getFront(), 1);
  assert.strictEqual(queue.size, 2);
});

test("ArrayQueue: clear", () => {
  const queue = new ArrayQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  queue.clear();

  assert.strictEqual(queue.size, 0);
  assert.strictEqual(queue.isEmpty, true);
});
