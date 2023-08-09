import test from "node:test";
import assert from "node:assert/strict";

import SelectionSort from "./index.js";

test("selection sort: [1, 4, 2, 3, 6, 5]", () => {
  assert.deepStrictEqual(
    new SelectionSort([1, 4, 2, 3, 6, 5], (a, b) => a - b).sort(),
    [1, 2, 3, 4, 5, 6]
  );
});
