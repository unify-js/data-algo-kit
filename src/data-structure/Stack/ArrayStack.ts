import type { Stack } from "./types.js";

export default class ArrayStack<T> implements Stack<T> {
  #arr: T[] = [];

  push(item: T): void {
    this.#arr.push(item);
  }

  pop(): T | undefined {
    return this.#arr.pop();
  }

  peek(): T | undefined {
    return this.#arr[this.#arr.length - 1];
  }

  isEmpty() {
    return this.#arr.length === 0;
  }

  getSize() {
    return this.#arr.length;
  }
}
