//Implement merge sort
var merge = function(arr1, arr2) {
  var result = [];

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      result.push(arr2.shift())
    } else {
      result.push(arr1.shift())
    }
  }

  return result;
}

var mergeSort = function(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push([arr[i]]);
  }

  while (res.length !== 1) {
    var sections = [];
    for (var i = 0; i < res.length; i += 2) {
      if (i === res.length - 1) {
        var merged = res[i];
      } else {
        var merged = merge(res[i], res[i+1])
      }
      sections.push(merged);
    }
    res = sections;
  }

  return res[0];
}