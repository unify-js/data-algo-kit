import { Deque } from "../Queue/Deque.js";
import type { Stack } from "./types.js";

export class ArrayStack<T> implements Stack<T> {
  #deque = new Deque<T>();

  get size() {
    return this.#deque.size;
  }

  get isEmpty() {
    return this.#deque.isEmpty;
  }
  push(item: T): void {
    this.#deque.addLast(item);
  }

  pop(): T | undefined {
    return this.#deque.removeLast();
  }

  peek(): T | undefined {
    return this.#deque.peekLast();
  }
}
