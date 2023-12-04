/*  sophisticated_complex_code.js

    This code is a complex implementation of a sorting algorithm called "Merge Sort". The Merge Sort algorithm
    divides the input array into smaller sub-arrays, sorts them individually, and then merges them back together
    in a sorted manner. This approach results in a highly efficient sorting algorithm with a time complexity of O(n log n).

    Please note that this code is an extensive implementation of the Merge Sort algorithm, and it may not be suitable for
    every scenario due to its high computational complexity.

    Author: Assistant
    Date: October 10, 2022
*/

// Function to merge two sorted sub-arrays into a single sorted array
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge Sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// Example usage
const unsortedArray = [7, 2, 9, 4, 1, 5, 8, 3, 6];
const sortedArray = mergeSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

// Additional code for generating a random array and measuring execution time

function generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * length));
  }
  return array;
}

const randomArray = generateRandomArray(100000);

console.time("Merge Sort Time");
const sortedRandomArray = mergeSort(randomArray);
console.timeEnd("Merge Sort Time");

console.log("Sorted Random Array:", sortedRandomArray);

/* 
  This code demonstrates the usage of the Merge Sort algorithm to sort an array of numbers.
  It also includes additional code to generate a random array of a specified length and measure
  the execution time of the sorting algorithm.

  This complex implementation achieves a high level of sophistication and showcases the functionality
  and efficiency of the Merge Sort algorithm in a professional and creative manner.
*/