import test from "node:test";
import assert from "node:assert/strict";

import { LinkedList } from "./index.js";

test("LinkedList: add element", () => {
  const linkedList = new LinkedList<number>();
  linkedList.addFirst(1);
  assert.strictEqual(linkedList.getFirst(), 1);
  assert.strictEqual(linkedList.getLast(), 1);

  linkedList.addLast(3);
  assert.strictEqual(linkedList.getFirst(), 1);
  assert.strictEqual(linkedList.getLast(), 3);

  linkedList.add(1, 2);
  assert.strictEqual(linkedList.getFirst(), 1);
  assert.strictEqual(linkedList.get(1), 2);
  assert.strictEqual(linkedList.getLast(), 3);
  assert.strictEqual(linkedList.size, 3);
});

test("LinkedList: remove element", () => {
  const linkedList = new LinkedList<number>();
  linkedList.addLast(1);
  linkedList.addLast(2);
  linkedList.addLast(3);
  linkedList.addLast(4);
  linkedList.addLast(5);
  assert.strictEqual(linkedList.size, 5);

  assert.strictEqual(linkedList.removeFirst(), 1);
  assert.strictEqual(linkedList.size, 4);

  assert.strictEqual(linkedList.removeLast(), 5);
  assert.strictEqual(linkedList.remove(1), 3);
  assert.strictEqual(linkedList.remove(1), 4);
  assert.strictEqual(linkedList.remove(0), 2);
});

test("LinkedList: contains element", () => {
  const linkedList = new LinkedList<number>();
  linkedList.addLast(1);
  linkedList.addLast(2);
  linkedList.addLast(3);
  linkedList.addLast(4);
  linkedList.addLast(5);

  assert.strictEqual(linkedList.contains(1), true);
  assert.strictEqual(linkedList.contains(2), true);
  assert.strictEqual(linkedList.contains(3), true);
  assert.strictEqual(linkedList.contains(4), true);
  assert.strictEqual(linkedList.contains(5), true);
  assert.strictEqual(linkedList.contains(6), false);
});
