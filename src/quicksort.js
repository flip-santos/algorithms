/* 
  Quicksort: a divide-and-conquer algorithm with an average time complexity of O(nlogn).
  This implementation uses recursion to sort the array by recursively dividing it into sub-arrays. 
  It takes an array as input and returns a new, sorted array. 
  The algorithm selects a pivot element (in this implementation, the first element of the array) 
  and then sorts the elements to the left of the pivot (which are less than the pivot) and the elements 
  to the right of the pivot (which are greater than or equal to the pivot). 
  The two sub-arrays are then concatenated with the pivot element in the middle to produce the final sorted array.

  Note that this implementation is not in-place, meaning it creates a new array rather than modifying the original array. 
  Also, while Quicksort is generally considered to be one of the most efficient sorting algorithms, 
  its performance can vary depending on the implementation and the input data.
*/

export default function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
