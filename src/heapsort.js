/**
 * #Heap Sort
 * heapSort function accepts an array as input and returns the sorted array using heap sort. 
 * The heapify function is used to build and maintain the max heap data structure. 
 * It takes three arguments: the array to be heapified, the length of the array, 
 * and the index of the current root node. 
 * The heapify function compares the root with its children and swaps the root with the largest child if necessary. 
 * The heapSort function first builds a max heap from the input array and then extracts the elements 
 * from the heap one by one and places them in the output array in sorted order.
 * 
 */

export default function heapSort(arr) {
  let len = arr.length;
  
  // Build a max heap
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, len, i);
  }

  // Extract elements from the heap one by one
  for (let i = len - 1; i >= 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, len, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left = 2*i + 1
  let right = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(arr, len, largest);
  }
}
