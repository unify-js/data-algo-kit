import type { Sort, CompareFunction } from "../types.js";
import { swap } from "../utils.js";

export default class InsertSort<T> implements Sort<T> {
  #arr: T[];
  #compareFunc: CompareFunction<T>;
  constructor(arr: T[], compareFunc: CompareFunction<T>) {
    this.#arr = arr;
    this.#compareFunc = compareFunc;
  }

  sort(): T[] {
    const tmpArr = [...this.#arr];

    for (let i = 1; i < tmpArr.length; i++) {
      for (let j = i; j - 1 >= 0; j--) {
        if (this.#compareFunc(tmpArr[j - 1], tmpArr[j]) > 0) {
          swap(tmpArr, j - 1, j);
        } else {
          break;
        }
      }
    }

    return tmpArr;
  }
}
