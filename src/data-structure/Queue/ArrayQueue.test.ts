import test from "node:test";
import assert from "node:assert/strict";

import ArrayQueue from "./ArrayQueue.js";

test("ArrayQueue: empty", () => {
  const arrayQueye = new ArrayQueue();

  assert.equal(arrayQueye.size, 0);
  assert.equal(arrayQueye.isEmpty, true);
});

test("ArrayQueye: enqueue", () => {
  const arrayQueye = new ArrayQueue<number>();

  arrayQueye.enqueue(1);
  arrayQueye.enqueue(2);
  arrayQueye.enqueue(3);

  assert.equal(arrayQueye.size, 3);
  assert.equal(arrayQueye.isEmpty, false);
});

test("ArrayQueye: dequeue", () => {
  const arrayQueye = new ArrayQueue<number>();

  arrayQueye.enqueue(1);
  arrayQueye.enqueue(2);

  assert.equal(arrayQueye.dequeue(), 1);
  assert.equal(arrayQueye.size, 1);
});

test("ArrayQueye: enqueue and dequeue", () => {
  const arrayQueye = new ArrayQueue<number>();

  arrayQueye.enqueue(1);
  arrayQueye.enqueue(2);
  arrayQueye.enqueue(3);

  assert.equal(arrayQueye.dequeue(), 1);
  assert.equal(arrayQueye.dequeue(), 2);

  arrayQueye.enqueue(4);
  arrayQueye.enqueue(5);

  assert.equal(arrayQueye.dequeue(), 3);
  assert.equal(arrayQueye.dequeue(), 4);
  assert.equal(arrayQueye.dequeue(), 5);
  assert.equal(arrayQueye.dequeue(), undefined);
});

test("ArrayQueye: getFront", () => {
  const arrayQueye = new ArrayQueue<number>();

  arrayQueye.enqueue(1);
  arrayQueye.enqueue(2);

  assert.equal(arrayQueye.getFront(), 1);
  assert.equal(arrayQueye.size, 2);
});

test("ArrayQueye: clear", () => {
  const arrayQueye = new ArrayQueue<number>();

  arrayQueye.enqueue(1);
  arrayQueye.enqueue(2);
  arrayQueye.enqueue(3);

  arrayQueye.clear();

  assert.equal(arrayQueye.size, 0);
  assert.equal(arrayQueye.isEmpty, true);
});
