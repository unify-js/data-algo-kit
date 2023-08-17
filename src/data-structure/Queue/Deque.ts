interface DequeInterface<T> {
  size: number;
  isEmpty: boolean;
  capacity: number;

  addFirst: (element: T) => void;
  addLast: (element: T) => void;
  removeFirst: () => T | undefined;
  removeLast: () => T | undefined;
  peekFirst: () => T | undefined;
  peekLast: () => T | undefined;
  clear: () => void;
}

export class Deque<T> implements DequeInterface<T> {
  #data: T[];
  #front = 0;
  #size = 0;

  constructor(capacity = 10) {
    this.#data = new Array(capacity);
  }

  get isEmpty() {
    return this.#size === 0;
  }

  get capacity() {
    return this.#data.length;
  }

  get tail() {
    return this.getSafeIndex(this.#front + this.#size - 1);
  }

  get size() {
    return this.#size;
  }

  private getSafeIndex(index: number) {
    return (index + this.capacity) % this.capacity;
  }

  #resize(capacity: number) {
    const newData = new Array<T>(capacity);

    for (let i = 0; i < this.#size; i++) {
      newData[i] = this.#data[(this.#front + i) % this.capacity];
    }

    this.#data = newData;
    this.#front = 0;
  }

  #halfCapacity() {
    if (this.size === Math.floor(this.capacity / 4) && Math.floor(this.capacity / 2) !== 0) {
      this.#resize(Math.floor(this.capacity / 2));
    }
  }

  #doubleCapacity() {
    if (this.size === this.capacity) {
      this.#resize(this.capacity * 2);
    }
  }

  addFirst(element: T) {
    if (this.#size === this.capacity) {
      this.#resize(this.capacity * 2);
    }

    // new element will be added to the (this.front -1) position
    this.#front = this.getSafeIndex(this.#front - 1);
    this.#data[this.#front] = element;
    this.#size++;

    this.#doubleCapacity();
  }

  addLast(element: T) {
    if (this.#size === this.capacity) {
      this.#resize(this.capacity * 2);
    }

    // new element will be added to the (this.tail + 1) position
    this.#data[this.tail + 1] = element;
    this.#size++;

    this.#doubleCapacity();
  }

  removeFirst(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    const result: T = this.#data[this.#front];
    this.#front = this.getSafeIndex(this.#front + 1);
    this.#size--;

    this.#halfCapacity();

    return result;
  }

  removeLast(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    const result = this.#data[this.tail];
    this.#size--;

    this.#halfCapacity();

    return result;
  }

  peekFirst(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    return this.#data[this.#front];
  }

  peekLast(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    return this.#data[this.tail];
  }

  clear() {
    this.#data = new Array(this.capacity);
    this.#front = 0;
    this.#size = 0;
  }
}
