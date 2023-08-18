export interface Stack<T> {
  size: number;
  isEmpty: boolean;

  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
}
