import test from "node:test";
import assert from "node:assert/strict";

import { bubbleSort } from "./bubbleSort.js";

test("BubbleSort: empty array", () => {
  const insertionSort = bubbleSort([], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), []);
});

test("BubbleSort: ordered array", () => {
  const insertionSort = bubbleSort([1, 2, 3, 4, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("BubbleSort: reverse ordered array", () => {
  const insertionSort = bubbleSort([5, 4, 3, 2, 1], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5]);
});

test("BubbleSort: unordered array", () => {
  const insertionSort = bubbleSort([1, 4, 2, 3, 6, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 6]);
});

test("BubbleSort: array has duplicated elements", () => {
  const insertionSort = bubbleSort([1, 4, 2, 3, 6, 5, 5], (a, b) => a - b);
  assert.deepStrictEqual(insertionSort.sort(), [1, 2, 3, 4, 5, 5, 6]);
});
