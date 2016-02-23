//Create a binary tree with pseudoclassical instantiation
//In this implementation, for each node, the of the left child 
//will always be greater than that of the right
var BinaryTree = function(value) {
  var treeNode = {};
  treeNode.val = value;
  treeNode.left = null;
  treeNode.right = null;
}

//Insert a new node into the binary tree.  
BinaryTree.prototype.insert = function(value) {
  //If the value is less that the current nodes value, set it 
  //to the nodes left prop or recursively insert it at the left node.
  if (value < this.val) {
    if (this.left === null) {
      this.left = new BinaryTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.val) {  //Otherwise do the oppostie
    if (this.right === null) {
      this.right = new BinaryTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

//Check if the Binary Tree contains a value
BinaryTree.prototype.contains = function(value) {
  //If current node's value is equal, return true, otherwise conditonally
  //Check one of the nodes children and invoke contains recursively.
  if (this.val === value) {
    return true;
  } else if (value < this.val) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.val) {
    return !!(this.right && this.right.contains(value));
  }
}

//Invoke a callback function on each node in depth first fashion
BinaryTree.prototype.depthFirstCB = function(cb) {
  cb(this.val);
  if (this.left) {
    this.left.depthFirstCB(cb);
  }
  if (this.right) {
    this.right.depthFirstCB(cb);
  }
}
