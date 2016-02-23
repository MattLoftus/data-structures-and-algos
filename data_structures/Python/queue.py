#Create a queue class
class Queue():

	def __init__(self, limit=1000):
		self._storage = []
		self._limit = limit
		self._size = _size

	def enqueue(self, item):
		if self._size < self._limit:
			self._size += 1
			self._storage.insert(0,item)

	def dequeue(self):
		if self._size > 0:
			self._size -= 1
			return self._storage.pop()

	def size(self):
		return self._size()