import { CompareFunction } from "./types.js";
import { swap } from "./utils.js";

function sort<T>(arr: T[], l: number, r: number, compareFn: CompareFunction<T>) {
  if (l >= r) {
    return;
  }

  const pivotIndex = l + Math.floor(Math.random() * (r - l + 1));
  swap(arr, pivotIndex, l);

  const pivot = arr[l];
  let lt = l;
  let i = l + 1;
  let gt = r + 1;

  while (i < gt) {
    if (compareFn(arr[i], pivot) < 0) {
      lt++;
      swap(arr, lt, i);
      i++;
    } else if (compareFn(arr[i], pivot) > 0) {
      gt--;
      swap(arr, gt, i);
    } else {
      i++;
    }
  }

  swap(arr, l, lt);

  sort(arr, l, lt, compareFn);
  sort(arr, gt, r, compareFn);
}

export function quickSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  sort(array, 0, array.length - 1, compareFn);
  return array;
}
