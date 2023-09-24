import type { CompareFunction } from "./types.js";

function merge<T>(left: T[], right: T[], compareFn: CompareFunction<T>) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) < 0 ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

export function mergeSort<T>(array: T[], compareFn: CompareFunction<T>) {
  let tmpArr = array.slice();

  const length = tmpArr.length;

  if (length > 1) {
    const middle = Math.floor(length / 2);

    const left = mergeSort(tmpArr.slice(0, middle), compareFn);
    const right = mergeSort(tmpArr.slice(middle, length), compareFn);

    tmpArr = merge(left, right, compareFn);
  }

  return tmpArr;
}
