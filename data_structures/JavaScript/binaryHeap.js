//The binary heap will be a complete tree, meaning a node can have 
//zero, one, or two children, and a node's sibling can have children 
//until all the leftmost nodes on the same depth are full.  We may use 
//an array for storage based on the heap's structure

var binaryHeap = function(type) {
  this._heap = [];

  //Private methods
  //Comparator is based on the type (min/max)
  this._compare = function(i, j) {
    if (type === "min") {
      return i < j;
    } else if (type === "max") {
      return i > j;
    } else {
      throw "Must choose type 'min' or 'max'";
    }
  }

  //Swap the positions of two nodes in storage
  this._swapNodes = function(i, j) {
    var temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  //Get lesser or greater of two children, based on type
  this._getChild = function(childIndices) {
    if (this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]])) {
      return childIndices[0]
    } else {
      return childIndices[1];
    }
  }
}

binaryHeap.prototype.insert = function(val) {
  //Insert node at the end of the storage
  this._heap.push(val);
  var index = this._heap.length - 1;

  //Filter the node up the heap until it finds its place
  var parentIndex = Math.floor( (index - 1) / 2);
  while (index > 0 && this._compare(this._heap[index], this._heap[parentIndex])) {
    //Swap current node with its parent and update indices
    this._swapNodes(index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
}

binaryHeap.prototype.removeRoot = function() {
  //Swap last node with root
  this._swapNodes(0, this._heap.length - 1 );

  //Pop off root to return later
  var oldRoot = this._heap.pop();

  //Trickle other node down the heap until it finds its place
  var index = 0;
  var childIndices = [index * 2 + 1, index * 2 + 2];
  var lesserChildIndex = this._getChild(childIndices);
  
  while (lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[index])) {
    //Swap node with lesser child, recalculate indices
    this._swapNodes(index, lesserChildIndex);
    index = lesserChildIndex;
    childIndices = [index * 2 + 1, index * 2 + 2]
    lesserChildIndex = this._getChild(childIndices);
  }

  //Return the old root
  return oldRoot;
}
var heapSort = function(array, direction) {
  //1 for ascending order, anything else for descending order
  var res = [];
  var heap;
  direction === 1 ? heap = new binaryHeap("min") : heap = new binaryHeap("max");

  //Insert all array items into the heap
  for (var i = 0; i < array.length; i++) {
    heap.insert(array[i]);
  }
  //Remove all items from the heap. We know root will always ben min/max val 
  for (var i = 0; i < array.length; i++) {
    res.push(heap.removeRoot());
  }

  return res;
}


//Basic Tests
// var testHeap = new binaryHeap("min");
// var testArr = [1,3,0,2,6,4,7,5];
// for (var i = 0; i < 7; i++) {
//   testHeap.insert(testArr[i]);
// }

// heapSort(testArr, 1);
// heapSort(testArr, 2);
