import type { CompareFunction } from "./types.js";
import { swap } from "./utils.js";

export function sort<T>(arr: T[], compareFunc: CompareFunction<T>): T[] {
  const tmpArr = [...arr];

  for (let i = 1; i < tmpArr.length; i++) {
    for (let j = i; j - 1 >= 0; j--) {
      if (compareFunc(tmpArr[j - 1], tmpArr[j]) > 0) {
        swap(tmpArr, j - 1, j);
      } else {
        break;
      }
    }
  }

  return tmpArr;
}
