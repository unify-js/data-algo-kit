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
  private data: T[];
  private front = 0;
  private tail = 0;
  private initialCapacity: number;

  constructor(capacity = 10) {
    this.data = new Array(capacity + 1);
    this.initialCapacity = capacity;
  }

  get size() {
    if (this.tail >= this.front) {
      return this.tail - this.front;
    }

    return this.data.length - (this.front - this.tail);
  }

  get isEmpty() {
    return this.front === this.tail;
  }

  get isFull() {
    return this.front === (this.tail + 1) % this.data.length;
  }

  get capacity() {
    return this.data.length - 1;
  }

  private get lastElementIndex() {
    if (this.tail === 0) {
      return this.data.length - 1;
    }

    return this.tail - 1;
  }

  private resize(capacity: number) {
    const newData = new Array<T>(capacity + 1);

    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(this.front + i) % this.capacity];
    }

    this.data = newData;
    this.front = 0;
    this.tail = this.size;
  }

  addFirst(element: T) {
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2);
    }

    // Confirm that the index of the new element is (index - 1). If the former value was 0, the index becomes (capacity - 1).
    if (this.front === 0) {
      this.front = this.data.length - 1;
    } else {
      this.front--;
    }

    this.data[this.front] = element;
  }

  addLast(element: T) {
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2);
    }

    this.data[this.tail] = element;
    this.tail = (this.tail + 1) % this.capacity;
  }

  removeFirst(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    const result: T = this.data[this.front];

    if (this.front === this.data.length - 1) {
      this.front = 0;
    } else {
      this.front++;
    }

    return result;
  }

  removeLast(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    const result = this.data[this.lastElementIndex];

    if (this.tail === 0) {
      this.tail = this.data.length - 1;
    } else {
      this.tail--;
    }

    return result;
  }

  peekFirst(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    return this.data[this.front];
  }

  peekLast(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    return this.data[this.lastElementIndex];
  }

  clear() {
    this.data = new Array(this.initialCapacity);
    this.front = 0;
    this.tail = 0;
  }
}
