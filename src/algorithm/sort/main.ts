import { PerformanceObserver, performance } from "perf_hooks";

import { ArrayGenerator, SortingHelper } from "./utils.js";

import { bubbleSort } from "./bubbleSort.js";
import { sort as insertionSort } from "./insertionSort.js";
import { sort as selectionSort } from "./selectionSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { quickSort as quickSort2 } from "./quickSort2.js";

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  for (const entry of items.getEntries()) {
    console.log(entry.name, `${entry.duration}ms`);
  }
  performance.clearMarks();
});

obs.observe({ entryTypes: ["measure"] });

const size = 10000;

const arr = ArrayGenerator.generateRandomArray(size);

performance.mark("start");
bubbleSort([...arr], (a, b) => a - b);
performance.mark("end");
performance.measure("bubbleSort", "start", "end");

performance.mark("start");
insertionSort([...arr], (a, b) => a - b);
performance.mark("end");
performance.measure("insertionSort", "start", "end");

performance.mark("start");
selectionSort([...arr], (a, b) => a - b);
performance.mark("end");
performance.measure("selectionSort", "start", "end");

performance.mark("start");
mergeSort(arr.slice(), (a, b) => a - b);
performance.mark("end");
performance.measure("mergeSort", "start", "end");

performance.mark("start");
quickSort(arr.slice(), (a, b) => a - b);
performance.mark("end");
performance.measure("quickSort", "start", "end");

performance.mark("start");
quickSort2(arr.slice(), (a, b) => a - b);
performance.mark("end");
performance.measure("quickSort2", "start", "end");

const orderArr = ArrayGenerator.generateOrderedArray(size);

performance.mark("start");
mergeSort(orderArr.slice(), (a, b) => a - b);
performance.mark("end");
performance.measure("mergeSort: ordered array", "start", "end");

performance.mark("start");
quickSort(orderArr.slice(), (a, b) => a - b);
performance.mark("end");
performance.measure("quickSort: ordered array", "start", "end");

performance.mark("start");
quickSort2(orderArr.slice(), (a, b) => a - b);
performance.mark("end");
performance.measure("quickSort: ordered array", "start", "end");
