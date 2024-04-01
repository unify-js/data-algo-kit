import type { CompareFunction } from "./types.js";
import { swap } from "./utils.js";

export function bubbleSort<T>(arr: T[], compareFunc: CompareFunction<T>) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (compareFunc(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
