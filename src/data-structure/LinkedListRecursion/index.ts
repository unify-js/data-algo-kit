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

export class LinkedList<E> implements LinkListInterface<E> {
  #head: LinkedListNode<E> | null = null;
  #size = 0;

  get head() {
    return this.#head;
  }

  get size() {
    return this.#size;
  }

  get isEmpty() {
    return this.#size === 0;
  }

  #add(node: LinkedListNode<E> | null, index: number, element: E): LinkedListNode<E> {
    if (node === null || index === 0) {
      this.#size++;
      return new LinkedListNode(element, node);
    }

    node.next = this.#add(node.next, index - 1, element);
    return node;
  }

  add(index: number, element: E): void {
    if (index < 0 || index > this.#size) {
      throw new Error("Add failed. Illegal index.");
    }

    this.#head = this.#add(this.#head, index, element);
  }

  addFirst(element: E): void {
    this.add(0, element);
  }

  addLast(element: E): void {
    this.add(this.#size, element);
  }

  #get(node: LinkedListNode<E>, index: number): E {
    if (index === 0) {
      return node.element;
    }

    return this.#get(node.next as LinkedListNode<E>, index - 1);
  }

  get(index: number): E {
    if (index < 0 || index >= this.#size) {
      throw new Error("Add failed. Illegal index.");
    }

    return this.#get(this.#head as LinkedListNode<E>, index);
  }

  getFirst(): E {
    return this.get(0);
  }

  getLast(): E {
    return this.get(this.#size - 1);
  }

  #set(node: LinkedListNode<E>, index: number, element: E): void {
    if (index === 0) {
      node.element = element;
      return;
    }

    this.#set(node.next as LinkedListNode<E>, index - 1, element);
  }

  set(index: number, element: E): void {
    if (index < 0 || index >= this.#size) {
      throw new Error("Set failed. Illegal index.");
    }

    this.#set(this.#head as LinkedListNode<E>, index, element);
  }

  setFirst(element: E): void {
    this.set(0, element);
  }

  setLast(element: E): void {
    this.set(this.#size - 1, element);
  }

  #remove(node: LinkedListNode<E>, index: number): LinkedListNode<E> | null {
    if (index === 0) {
      this.#size--;
      return node.next;
    }

    node.next = this.#remove(node.next as LinkedListNode<E>, index - 1);
    return node;
  }

  remove(index: number): E {
    if (index < 0 || index >= this.#size) {
      throw new Error("Remove failed. Index is illegal.");
    }

    this.#head = this.#remove(this.#head as LinkedListNode<E>, index);
  }
}
