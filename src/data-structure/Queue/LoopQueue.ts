import { Deque } from "./Deque.js";

interface LoopQueueInterface<T> {
  size: number;
  isEmpty: boolean;
  capacity: number;

  enqueue: (element: T) => void;
  dequeue: () => T | undefined;
  getFront: () => T | undefined;
  clear: () => void;
}

export default class LoopQueue<T> implements LoopQueueInterface<T> {
  deque: Deque<T>;

  constructor(capacity: number = 10) {
    this.deque = new Deque({
      capacity,
      autoShrink: true,
    });
  }

  get isEmpty() {
    return this.deque.isEmpty;
  }

  get capacity() {
    return this.deque.capacity;
  }

  get size() {
    return this.deque.size;
  }

  enqueue(element: T) {
    this.deque.addLast(element);
  }

  dequeue() {
    return this.deque.removeFirst();
  }

  getFront() {
    return this.deque.peekFirst();
  }

  clear() {
    this.deque.clear();
  }
}
