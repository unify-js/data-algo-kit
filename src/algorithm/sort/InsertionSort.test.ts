import test from "node:test";
import assert from "node:assert/strict";

import InsertionSort from "./InsertionSort.js";

test("InsertionSort: empty array", () => {
  const insertionSort = new InsertionSort([], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), []);
});

test("InsertionSort: ordered array", () => {
  const insertionSort = new InsertionSort([1, 2, 3, 4, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("InsertionSort: reverse ordered array", () => {
  const insertionSort = new InsertionSort([5, 4, 3, 2, 1], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("InsertionSort: unordered array", () => {
  const insertionSort = new InsertionSort([1, 4, 2, 3, 6, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 6]);
});

test("InsertionSort: array has duplicated elements", () => {
  const insertionSort = new InsertionSort([1, 4, 2, 3, 6, 5, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 5, 6]);
});
