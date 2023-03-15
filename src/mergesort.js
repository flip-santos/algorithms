/*
  Merge Sort: a divide-and-conquer algorithm with a time complexity of O(nlogn).
  This implementation uses a divide-and-conquer approach to recursively split the array into 
  smaller subarrays until each subarray contains only one element. Then, the subarrays are 
  merged back together in a sorted order. 
  This results in a time complexity of O(n log n) in the worst case.
*/

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
