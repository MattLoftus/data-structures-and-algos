var Tree = function(value) {
  this.val = value;
  this.children = [];
}
Tree.prototype.addChild = function(val) {
  this.children.push(new Tree(val));
}
Tree.prototype.contains = function(val) {
  if (this.val === val) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(val)) {
        return true;
      }
    }
    return false;
  }
  return false;
}

//Implement bread-first search on a basic Tree using a queue
Tree.prototype.bfSearch = function(value) {
  var queue = [this];

  while (true) {
    if (queue.length === 0) {
      return false;
    } else {
      var node = queue.pop();
    }
    if (node.val === value) {
      return true;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        queue.unshift(node.children[i]);
      }
    }
  }
}