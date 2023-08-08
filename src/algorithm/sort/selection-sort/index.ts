// 选择排序

import type { CompareFunction, Sort } from "../types.js";
import { swap } from "../utils.js";

export default class SelectionSort<T> implements Sort<T> {
  arr: T[];
  compareFunction: CompareFunction<T>;
  constructor(arr: T[], compareFunction: CompareFunction<T>) {
    this.arr = arr;
    this.compareFunction = compareFunction;
  }

  sort(): T[] {
    const tmpArr = [...this.arr];

    for (let i = 0; i < tmpArr.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < tmpArr.length; j++) {
        if (this.compareFunction(tmpArr[minIndex], tmpArr[j]) > 0) {
          minIndex = j;
        }
      }

      swap(tmpArr, i, minIndex);
    }

    return tmpArr;
  }
}
