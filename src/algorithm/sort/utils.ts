import type { CompareFunction } from "./types.js";

export function swap<T>(arr: T[], indexA: number, indexB: number) {
  const tmp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = tmp;
}

export class ArrayGenerator {
  private constructor() {}

  static generateOrderedArray(arrayLength: number): number[] {
    const arr = new Array(arrayLength);

    for (let i = 0; i < arrayLength; i++) {
      arr[i] = i;
    }

    return arr;
  }

  static generateRandomArray(arrayLength: number): number[] {
    const arr = new Array(arrayLength);

    for (let i = 0; i < arrayLength; i++) {
      const randomNum = Math.floor(Math.random() * (arrayLength + 1));
      arr[i] = randomNum;
    }

    return arr;
  }
}

export class SortingHelper {
  private constructor() {}

  static isSorted<T>(arr: T[], compareFunction: CompareFunction<T>): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (compareFunction(arr[i - 1], arr[i]) > 0) {
        return false;
      }
    }
    console.log("true");
    return true;
  }
}
