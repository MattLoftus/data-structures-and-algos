#Create a stack class
class Stack():

	def __init__(self, limit=1000):
		self._limit = limit
		self._storage = []
		self._size = 0

	def pop(self):
		if self._size > 0:
			self._size -= 1
			return self._storage.pop()

	def add(self, item):
		if self._size < self._limit:
			self._size += 1
			self._storage.append(item)

	def size(self):
		return self._size