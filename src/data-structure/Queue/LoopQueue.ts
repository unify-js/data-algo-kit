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
  #data: T[];
  #front: number;
  #tail: number;
  #size: number;
  #initialCapacity: number;

  constructor(capacity: number = 10) {
    this.#data = new Array(capacity);
    this.#front = 0;
    this.#tail = 0;
    this.#size = 0;
    this.#initialCapacity = capacity;
  }

  get isEmpty() {
    return this.#size === 0;
  }

  get capacity() {
    return this.#data.length;
  }

  get size() {
    return this.#size;
  }

  #resize(newCapacity: number) {
    const newData = new Array(newCapacity);

    for (let i = 0; i < this.#size; i++) {
      newData[i] = this.#data[(i + this.#front) % this.#data.length];
    }

    this.#front = 0;
    this.#tail = this.#size;

    this.#data = newData;
  }

  enqueue(element: T) {
    if (this.#size === this.capacity) {
      this.#resize(this.capacity * 2);
    }

    this.#data[this.#tail] = element;
    this.#tail = (this.#tail + 1) % this.#data.length;
    this.#size++;
  }

  dequeue() {
    if (this.isEmpty) {
      return undefined;
    }

    const result = this.#data[this.#front];
    this.#front = (this.#front + 1) % this.#data.length;
    this.#size--;

    if (this.#size === Math.floor(this.capacity / 4) && Math.floor(this.capacity / 2) !== 0) {
      this.#resize(this.capacity / 2);
    }

    return result;
  }

  getFront() {
    if (this.isEmpty) {
      return undefined;
    }

    return this.#data[this.#front];
  }

  clear() {
    this.#data = new Array(this.#initialCapacity);
    this.#front = 0;
    this.#tail = 0;
    this.#size = 0;
  }
}
