interface ArrayQueueInterface<T> {
  size: number;
  isEmpty: boolean;

  enqueue: (element: T) => void;
  dequeue: () => T | undefined;
  getFront: () => T | undefined;
  clear: () => void;
}

export class ArrayQueue<T> implements ArrayQueueInterface<T> {
  #queue: T[] = [];

  get size(): number {
    return this.#queue.length;
  }

  get isEmpty(): boolean {
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

  clear() {
    this.#queue = [];
  }
}
