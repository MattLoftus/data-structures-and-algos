//Create a stack using pseudoclassical instantiation
var Stack = function(limit) {
  this._storage = [];
  this._size = 0;
  this.limit = limit || 1000;
}

Stack.prototype.push = function(val) {
  //Increment size and add value to top of the stack
  if (this._size < this.limit) {
    this._size++;
    this._storage.push(val);
  } else {
    return "Could not add value, stack is full";
  }
}

Stack.prototype.pop = function(val) {
  //Remove and return top item if stack is non-empty
  if (this._size > 0) {
    this._size--;
    return this._storage.pop();
  }
  return null; 
}

Stack.prototype.size = function() {
  return this._size;
}