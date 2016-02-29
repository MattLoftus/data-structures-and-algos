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

//Implement a depth first search
Tree.prototype.dfSearch = function(value) {
  if (this.val === value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].dfSearch(value)) {
        return true;
      }
    }
    return false;
  }
}