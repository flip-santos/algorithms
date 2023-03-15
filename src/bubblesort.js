/*
  The bubble sort algorithm has a time complexity of O(n^2) which is not very efficient, 
  especially for larger arrays. Here's an optimized version of the algorithm that avoids 
  unnecessary iterations when the array is already sorted.
*/

export default function bubbleSort(arr) {
  let isSorted = false;
  let lastUnsorted = arr.length - 1;
  
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }  
    }  
    lastUnsorted--;
  }  
  
  return arr;
}  

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
