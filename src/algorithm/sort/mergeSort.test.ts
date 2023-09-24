import test from "node:test";
import assert from "node:assert/strict";

import { mergeSort as sort } from "./mergeSort.js";

test("mergeSort: empty array", () => {
  const insertionSort = sort([], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), []);
});

test("mergeSort: ordered array", () => {
  const insertionSort = sort([1, 2, 3, 4, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("mergeSort: reverse ordered array", () => {
  const insertionSort = sort([5, 4, 3, 2, 1], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("mergeSort: unordered array", () => {
  const insertionSort = sort([1, 4, 2, 3, 6, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 6]);
});

test("mergeSort: array has duplicated elements", () => {
  const insertionSort = sort([1, 4, 2, 3, 6, 5, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 5, 6]);
});
