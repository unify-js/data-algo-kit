import type { CompareFunction } from "./types.js";
import { swap } from "./utils.js";

export function sort<T>(arr: T[], compareFunc: CompareFunction<T>): T[] {
  const tmpArr = [...arr];

  for (let i = 0; i < tmpArr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < tmpArr.length; j++) {
      if (compareFunc(tmpArr[minIndex], tmpArr[j]) > 0) {
        minIndex = j;
      }
    }

    swap(tmpArr, i, minIndex);
  }

  return tmpArr;
}
