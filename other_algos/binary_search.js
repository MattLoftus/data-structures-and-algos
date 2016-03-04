//Implement binary search on a sorted array
var binarySearch = function(arr, value) {
  var left = 0;
  var right = arr.length - 1;

  //Continue until right and left pointers are equal
  while (left !== right) {
    var middle = Math.floor( (right - left) / 2) + left;
    if (arr[middle] === value) {
      return true;
    } else if (left === middle) {
      return arr[middle + 1] === value ? true : false;
    } else if (arr[middle] < value) {
      left = middle;
    } else {
      right = middle;
    } 
  }
  return false;
}


// console.log(binarySearch([1,2,3,4,5,6], 1));
// console.log(binarySearch([1,2,3,4,5,6], 2));
// console.log(binarySearch([1,2,3,4,5,6], 3));
// console.log(binarySearch([1,2,3,4,5,6], 4));
// console.log(binarySearch([1,2,3,4,5,6], 5));
// console.log(binarySearch([1,2,3,4,5,6], 6));
// console.log(binarySearch([1,2,3,4,5,7], 6));
// console.log(binarySearch([1,2,3,4,5,6], 10));
