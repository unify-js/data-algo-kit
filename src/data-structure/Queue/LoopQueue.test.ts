import test from "node:test";
import assert from "node:assert/strict";

import LoopQueue from "./LoopQueue.js";

test("LoopQueue: empty", () => {
  const queue = new LoopQueue(5);

  assert.strictEqual(queue.size, 0);
  assert.strictEqual(queue.isEmpty, true);
});

test("LoopQueue: enqueue", () => {
  const queue = new LoopQueue<number>(2);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  assert.strictEqual(queue.size, 3);
  assert.strictEqual(queue.isEmpty, false);
});

test("LoopQueue: dequeue", () => {
  const queue = new LoopQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);

  assert.strictEqual(queue.dequeue(), 1);
  assert.strictEqual(queue.size, 1);
});

test("LoopQueue: capacity", () => {
  const queue = new LoopQueue<number>(3);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  assert.strictEqual(queue.capacity, 6);

  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  assert.strictEqual(queue.capacity, 12);

  queue.enqueue(7);
  assert.strictEqual(queue.capacity, 12);

  for (let i = 0; i < 4; i++) {
    queue.dequeue();
  }
  assert.strictEqual(queue.capacity, 6);
});

test("LoopQueue: getFront", () => {
  const queue = new LoopQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);

  assert.strictEqual(queue.getFront(), 1);
  assert.strictEqual(queue.size, 2);
});

test("LoopQueue: clear", () => {
  const queue = new LoopQueue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  queue.clear();

  assert.strictEqual(queue.size, 0);
  assert.strictEqual(queue.isEmpty, true);
});
