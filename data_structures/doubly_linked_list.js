//Create a doubly linked list with pseudoclassical instantiation
var LinkedList = function(limit) {
  this._head = null;
  this._tail = null;
  this._limit = limit || 1000;
  this._size = 0;
}

LinkedList.prototype.createNode = function(value) {
  //Create a new node with passed in value
  var node = {};
  node.val = value;
  node.next = null;
  node.prev = null;
  return node;
}

LinkedList.prototype.removeHead = function() {
  //Remove and return head
  if (this._size > 0) {
    var val = this.head.val;
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
    return val;
  } 
  return null;
}

LinkedList.prototype.addToTail = function(val) {
  if (this._size < this._limit) {
    var node = this.createNode(val);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this._size++;
  } else {
    return "cannot add item to tail, list is full";
  }
}

LinkedList.prototype.contains = function(target) {
  var node = this.head;

  while (node !== null) {
    if (node.val === target) {
      return true;
    }
    node = node.next;
  }

  return false;
}

LinkedList.prototype.size = function() {
  return this._size;
}


