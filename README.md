# @unify-js/data-algo-kit

A toolkit of data structures and algorithms for JavaScript.

- ESM only
- Written in TypeScript

## Installation

```sh
npm install @unify-js/data-algo-kit
```

## Examples

```ts
import { Dequeue } from "@unify-js/data-algo-kit";

const deque = new Deque<number>();

deque.addFirst(1);
deque.addLast(2);

deque.removeFirst();
deque.removeLast();
```
