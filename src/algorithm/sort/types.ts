export interface Sort<T> {
  sort(): T[];
}

export type CompareFunction<T> = (a: T, b: T) => number;
