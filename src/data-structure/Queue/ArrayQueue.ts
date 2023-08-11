import type { QueueInterface } from "./types.js";

export default class ArrayQueue<T> implements QueueInterface<T> {
  #queue: T[] = [];

  getSize(): number {
    return this.#queue.length;
  }

  isEmpty(): boolean {
    return this.#queue.length === 0;
  }

  enqueue(element: T): void {
    this.#queue.push(element);
  }

  dequeue(): T | undefined {
    return this.#queue.shift();
  }

  getFront(): T | undefined {
    return this.#queue[0];
  }
}
