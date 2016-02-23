#Create an undirected graph class
class Graph():

	def __init__(self):
		self._nodes = {}

	def createNode(self, value):
		node = {}
		node[val] = value
		node["edges"] = {}
		self._nodes[value] = node

	def addEdge(self, fromNode, toNode):
		self._nodes[fromNode]["edges"] = toNode
		self._nodes[toNode]["edges"] = fromNode

	def hasEdge(self, fromNode, toNode):
		edges = self._nodes[fromNode]["edges"]
		if toNode in edges:
			return true
		else:
			return false

	def contains(self, value):
		if value in self._nodes:
			return true
		else:
			return false

	def removeNode(self, value):
		del self._nodes[value]

	def removeEdge(self, fromNode, toNode):
		del self._nodes[fromNode]["edges"][toNode]
		del self._nodes[toNode]["edges"][fromNode]

	def forEach(self, cb):
		for node in self._nodes:
			cb(self._nodes[node]["val"])
