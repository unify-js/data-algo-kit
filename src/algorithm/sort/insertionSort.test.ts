import test from "node:test";
import assert from "node:assert/strict";

import { sort } from "./insertionSort.js";

test("InsertionSort: empty array", () => {
  const insertionSort = sort([], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), []);
});

test("InsertionSort: ordered array", () => {
  const insertionSort = sort([1, 2, 3, 4, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("InsertionSort: reverse ordered array", () => {
  const insertionSort = sort([5, 4, 3, 2, 1], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("InsertionSort: unordered array", () => {
  const insertionSort = sort([1, 4, 2, 3, 6, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 6]);
});

test("InsertionSort: array has duplicated elements", () => {
  const insertionSort = sort([1, 4, 2, 3, 6, 5, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 5, 6]);
});
