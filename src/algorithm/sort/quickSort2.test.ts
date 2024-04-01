import test from "node:test";
import assert from "node:assert/strict";

import { quickSort as sort } from "./quickSort2.js";

test("quickSort2: empty array", () => {
  const sortedArray = sort([], (a, b) => a - b);
  assert.deepStrictEqual(sortedArray.sort(), []);
});

test("quickSort2: ordered array", () => {
  const sortedArray = sort([1, 2, 3, 4, 5], (a, b) => a - b);
  assert.deepStrictEqual(sortedArray, [1, 2, 3, 4, 5]);
});

test("quickSort2: reverse ordered array", () => {
  const sortedArray = sort([5, 4, 3, 2, 1], (a, b) => a - b);
  assert.deepStrictEqual(sortedArray, [1, 2, 3, 4, 5]);
});

test("quickSort2: unordered array", () => {
  const sortedArray = sort([1, 4, 2, 3, 6, 5], (a, b) => a - b);
  assert.deepStrictEqual(sortedArray, [1, 2, 3, 4, 5, 6]);
});

test("quickSort2: array has duplicated elements", () => {
  const sortedArray = sort([1, 4, 2, 3, 6, 5, 5], (a, b) => a - b);
  assert.deepStrictEqual(sortedArray, [1, 2, 3, 4, 5, 5, 6]);
});

test("quickSort2: array has negative elements", () => {
  const sortedArray = sort([1, -4, 2, 3, -6, 5], (a, b) => a - b);
  assert.deepStrictEqual(sortedArray, [-6, -4, 1, 2, 3, 5]);
});
