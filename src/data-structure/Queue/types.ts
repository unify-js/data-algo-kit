export interface QueueInterface<T> {
  size: number;
  isEmpty: boolean;

  enqueue: (element: T) => void;
  dequeue: () => T | undefined;
  getFront: () => T | undefined;
}
