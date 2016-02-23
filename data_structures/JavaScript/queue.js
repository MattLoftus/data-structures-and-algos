//Create a queue using pseudoclassical instantiation
var Queue = function(limit) {
  this._storage = [];
  this._size = 0;
  this._limit = limit || 0;
}

Queue.prototype.enqueue = function(val) {
  //add item to beginning of queue and increment size
  if (this._size < this._limit) {
    this._size++;
    this._storage.unshift(val);
  } else {
    return "Cannot enqueue value, queue is full";
  }
}

Queue.prototype.dequeue = function() {
  //Remove and return val at end of stack if it is nonempty
  if (this._size > 0) {
    this._size--;
    return this._storage.pop();
  }
  return null;
}

Queue.prototype.size = function() {
  return this._size;
}