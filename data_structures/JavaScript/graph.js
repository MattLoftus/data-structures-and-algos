//Create an undirected (edges go both ways) graph with pseudoclassical instantiation
var Graph = function() {
  this.nodes = {};
}

Graph.prototype.createNode = function(value) {
  var node = {};
  node.val = value;
  node.edges = {};
  this.nodes[value] = node;
}

//Add an edge from one node to another
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
}

//Check if the graph has an edge between two specified nodes
//We use "hasOwnProperty" to only check for user defined nodes
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].hasOwnProperty(toNode)) {
    return true;
  }
  return false
}

//Check if a particular node is contained in the graph
Graph.prototype.contains = function(value) {
  if (this.nodes.hasOwnProperty(value)) {
    return true;
  }
  return false;
}

//Remove a node from the graph
Graph.prototype.removeNode = function(value) {
  delete this.nodes[value];
}

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
}

Graph.prototype.forEach = function(cb) {
  for (var key in this.nodes) {
    if (this.nodes.hasOwnProperty(key)) {
      cb(this.nodes[key].val);
    }
  }
}

