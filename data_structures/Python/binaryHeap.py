import math
# A binary heap class, can be a 'min' or 'max' heap
class binaryHeap():

	def __init__(self, type="min"):
	self._heap = []
	self._type = type;

	def _compare(self, i, j):
		if self._type == "min":
			return i < j
		else:
			return i > j

	def _swapNodes(self, i, j):
		temp = self._heap[i]
		self._heap[i] = self._heap[j]
		self._heap[j] = temp

	def _getChild(self, childIndices):
		if self._compare(self._heap[childIndices[0]], self._heap[childIndices[1]]):
			return childIndices[0]
		else:
			return childIndices[1]

	def insert(self, val):
		self._heap.append(val)
		index = len(self._heap) - 1
		parentIndex = math.floor( (index - 1) / 2)

		while (index > 0 and self._compare(self._heap[index], self._heap[parentIndex])):
			self._swapNodes(index, parentIndex)
			index = parentIndex
			parentIndex = math.floor( (index - 1) / 2)

	def removeRoot(self):
		self._swapNodes(0, len(self._heap) - 1)
		oldRoot = self._heap.pop()

		index = 0
		childIndices = [index * 2 + 1, index * 2 + 2]
		childIndex = self._getChild(childIndices)

		while childIndex and self._compare(self._heap[childIndex], self._heap[index]):
			self._swapNodes(index, childIndex)
			index = childIndex
			childIndices = [index * 2 + 1, index * 2 + 2]
			childIndex = self._getChild(childIndices)

		return oldRoot

#Implement heapSort based using a binaryHeap
def heapSort(array, direction=1):
	res = []
	if direction == 1:
		heap = binaryHeap("min")
	else:
		heap = binaryHeap("max")

	for val in array:
		heap.insert(val)

	for i in range(0,len(array)):
		res.append(binaryHeap.removeRoot())

	return res








