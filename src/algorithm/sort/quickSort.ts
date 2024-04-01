import { CompareFunction } from "./types.js";

export function quickSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];
  const equal: T[] = [];
  const lessThan: T[] = [];
  const right: T[] = [];

  array.forEach((item) => {
    if (compareFn(item, pivot) < 0) {
      lessThan.push(item);
    } else if (compareFn(item, pivot) > 0) {
      right.push(item);
    } else {
      equal.push(item);
    }
  });

  return quickSort(lessThan, compareFn).concat(equal, quickSort(right, compareFn));
}
