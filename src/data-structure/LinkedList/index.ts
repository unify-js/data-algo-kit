import { isEqual } from "lodash-es";

interface LinkListInterface<E> {
  size: number;
  isEmpty: boolean;

  add(index: number, element: E): void;
  addFirst(element: E): void;
  addLast(element: E): void;

  get(index: number): E;
  getFirst(): E;
  getLast(): E;

  set(index: number, element: E): void;
  setFirst(element: E): void;
  setLast(element: E): void;

  remove(index: number): E;
  removeFirst(): E;
  removeLast(): E;

  contains(element: E): boolean;
}

class LinkedListNode<E> {
  element: E;
  next: LinkedListNode<E> | null;

  constructor(element: E, next: LinkedListNode<E> | null = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedListDummyHeadNode<E> {
  element = null;
  next: LinkedListNode<E> | null;

  constructor(next: LinkedListNode<E> | null) {
    this.next = next;
  }
}

export class LinkedList<E> implements LinkListInterface<E> {
  #dummyHead: LinkedListDummyHeadNode<E> = new LinkedListDummyHeadNode(null);
  #size = 0;

  get head() {
    return this.#dummyHead.next;
  }

  get size() {
    return this.#size;
  }

  get isEmpty() {
    return this.#size === 0;
  }

  add(index: number, element: E): void {
    if (index < 0 || index > this.#size) {
      throw new Error("Add failed. Illegal index.");
    }

    let prev = this.#dummyHead as LinkedListDummyHeadNode<E> | LinkedListNode<E>;
    for (let i = 0; i < index; i++) {
      prev = prev.next as LinkedListNode<E>;
    }
    prev.next = new LinkedListNode(element, prev.next);

    this.#size++;
  }

  addFirst(element: E): void {
    this.add(0, element);
  }

  addLast(element: E): void {
    this.add(this.#size, element);
  }

  get(index: number): E {
    if (index < 0 || index > this.#size) {
      throw new Error("Get failed, Illegal index.");
    }

    let current = this.#dummyHead as LinkedListDummyHeadNode<E> | LinkedListNode<E>;
    for (let i = 0; i <= index; i++) {
      current = current.next as LinkedListNode<E>;
    }

    return current.element as E;
  }

  getFirst(): E {
    return this.get(0);
  }

  getLast(): E {
    return this.get(this.#size - 1);
  }

  set(index: number, element: E): void {
    if (index < 0 || index >= this.#size) {
      throw new Error("Get failed, Illegal index.");
    }

    let current = this.#dummyHead as LinkedListDummyHeadNode<E> | LinkedListNode<E>;
    for (let i = 0; i <= index; i++) {
      current = current.next as LinkedListNode<E>;
    }

    current.element = element;
  }

  setFirst(element: E): void {
    this.set(0, element);
  }

  setLast(element: E): void {
    this.set(this.size - 1, element);
  }

  contains(element: E): boolean {
    let current = this.#dummyHead as LinkedListDummyHeadNode<E> | LinkedListNode<E> | null;

    while (current !== null) {
      current = current.next;
      if (isEqual(current?.element, element)) {
        return true;
      }
    }

    return false;
  }

  remove(index: number): E {
    if (index < 0 || index >= this.#size) {
      throw new Error("Remove failed.  Index is illegal.");
    }

    let prev = this.#dummyHead as LinkedListDummyHeadNode<E> | LinkedListNode<E>;
    for (let i = 0; i < index; i++) {
      prev = prev.next as LinkedListNode<E>;
    }

    const removeElement = prev.next as LinkedListNode<E>;
    prev.next = removeElement.next;
    removeElement.next = null;
    this.#size--;

    return removeElement.element;
  }

  removeFirst(): E {
    return this.remove(0);
  }

  removeLast(): E {
    return this.remove(this.#size - 1);
  }
}
