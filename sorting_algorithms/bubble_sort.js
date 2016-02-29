//Implementation of bubble sort, ascending order, in place sort
//O(N^2) time complexity
var bubbleSort = function(arr) {
  var length = arr.length;

  while (true) { // O(N) time
    var swaps = false;
    for (var i = 0; i < length - 1; i++) { //O(N) time
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swaps = true;
      }
    }
    if (!swaps) {
      return arr;
    }
    length--;
  }

}