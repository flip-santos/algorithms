import Chance from 'chance';
// import bogoSort from './src/bogosort'; // Be Carefull!!!1!
import bubbleSort from './src/bubblesort.js';
import cocktailShakerSort from './src/cocktailshaker.js';
import gnomeSort from './src/gnomesort.js';
import heapSort from './src/heapsort.js';
import insertionSort from './src/insertionsort.js';
import jsSort from './src/jssort.js';
import mergeSort from './src/mergesort.js';
import quickSort from './src/quicksort.js';
import radixSort from './src/radixsort.js'; // only works on ints
import selectionSort from './src/selectionsort.js';
import shellSort from './src/shellsort.js';

const algorithms = {
  // bogoSort,
  bubbleSort,
  cocktailShakerSort,
  gnomeSort,
  heapSort,
  insertionSort,
  jsSort,
  mergeSort,
  quickSort,
  radixSort,
  selectionSort,
  shellSort,
}

const chance = new Chance();

// Helper Functions
function makeShuffledRange(len) {
    const arr = [];
    for (let i = 0; i <= len; i++) {
        arr.push(i);
    }
    return arr.sort(() => Math.random() - 0.5);
}

function isSorted(arr) {
  if(!arr) return;
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

function runIt(algo) {
    const cp = [...testData];
    const start = performance.now();
    const result = algo(cp);
    results.push({ name: algo.name, time: performance.now() - start })
    !isSorted(result) && console.log(algo.name, 'sorting failed!');
    result.length !== testData.length && console.log(algo.name, 'length mismatch!');
}

// Main Testing
// const testData = makeShuffledRange(10000);
// const testData = chance.n(chance.character, 10000);
const testData = chance.n(chance.hammertime, 10000);
const results = [];

Object.keys(algorithms).map(item => {
  runIt(algorithms[item]);
});

console.table(results.sort((a, b) => a.time - b.time));
