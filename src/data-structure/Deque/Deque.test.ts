import test from "node:test";
import assert from "node:assert/strict";

import { Deque } from "./index.js";

test("Deque: adding and removing elements", () => {
  const deque = new Deque<number>();

  deque.addFirst(1);
  assert.strictEqual(deque.peekFirst(), 1);
  assert.strictEqual(deque.peekLast(), 1);

  deque.addLast(2);
  assert.strictEqual(deque.peekFirst(), 1);
  assert.strictEqual(deque.peekLast(), 2);

  assert.strictEqual(deque.removeFirst(), 1);
  assert.strictEqual(deque.removeLast(), 2);

  assert.strictEqual(deque.isEmpty, true);
  assert.strictEqual(deque.size, 0);

  assert.strictEqual(deque.removeFirst(), undefined);
  assert.strictEqual(deque.removeLast(), undefined);
});

test("Deque: addLast", () => {
  const deque = new Deque<number>({
    capacity: 5,
  });

  deque.addLast(1);
  assert.strictEqual(deque.peekFirst(), 1);
  assert.strictEqual(deque.peekLast(), 1);
  assert.strictEqual(deque.size, 1);
  assert.strictEqual(deque.isEmpty, false);
  assert.strictEqual(deque.capacity, 5);
  assert.strictEqual(deque.removeFirst(), 1);

  deque.addLast(1);
  assert.strictEqual(deque.removeLast(), 1);
});

test("Deque: queue status", () => {
  const deque = new Deque<number>();
  assert.strictEqual(deque.size, 0);
  assert.strictEqual(deque.isEmpty, true);

  deque.addFirst(1);
  assert.strictEqual(deque.size, 1);
  deque.addFirst(2);
  assert.strictEqual(deque.size, 2);
  deque.addFirst(3);
  assert.deepStrictEqual(deque.peekFirst(), 3);
  assert.deepStrictEqual(deque.peekLast(), 1);

  assert.strictEqual(deque.removeFirst(), 3);
  assert.strictEqual(deque.size, 2);
  assert.strictEqual(deque.removeLast(), 1);
  assert.strictEqual(deque.size, 1);
});

test("Deque: queue clear", () => {
  const deque = new Deque<number>();

  deque.addFirst(1);
  deque.addFirst(2);
  deque.addFirst(3);

  deque.clear();
  assert.strictEqual(deque.size, 0);
  assert.strictEqual(deque.isEmpty, true);
});

test("Deque: queue capacity", () => {
  const deque = new Deque<number>({ capacity: 1 });

  assert.strictEqual(deque.capacity, 1);

  deque.addFirst(1);
  assert.strictEqual(deque.capacity, 2);

  deque.addFirst(2);
  assert.strictEqual(deque.capacity, 4);

  deque.addFirst(3);
  deque.addFirst(4);
  assert.strictEqual(deque.capacity, 8);

  deque.removeFirst();
  deque.removeFirst();
  assert.strictEqual(deque.capacity, 8);
});

test("Deque: queue capacity autoShrink", () => {
  const deque = new Deque<number>({ capacity: 1, autoShrink: true });

  assert.strictEqual(deque.capacity, 1);

  deque.addFirst(1);
  assert.strictEqual(deque.capacity, 2);

  deque.addFirst(2);
  assert.strictEqual(deque.capacity, 4);

  deque.addFirst(3);
  deque.addFirst(4);
  assert.strictEqual(deque.capacity, 8);

  deque.removeFirst();
  deque.removeFirst();
  assert.strictEqual(deque.capacity, 4);
});
