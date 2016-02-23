//Create a tree with pseudoclassical instantiation
var Tree = function(value) {
  this.val = value;
  this.children = [];
}

//Each node is a tree, so we create a new tree node and
//add it to the current node's children
Tree.prototype.addChild = function(val) {
  this.children.push(new Tree(val));
}

//Recursively check if tree or its children contain the target
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