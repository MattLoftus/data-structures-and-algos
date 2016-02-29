#Create a hash table class with resisizing and collision resolution
#Resize - O(n) time
#Insert - O(1) time, amortized
#Retrieve - O(1) time, amortized
#Remove - O(1) time, amortized
#Contains - O(1) time, amortized
#Size - O(1) time
#GetHash - O(1) time

class HashTable():

	def __init__(self, limit=1000):
		self._storage = []
		self._limit = limit
		self._size = 0

	def resize(self, limit):
		#Copy and delete storage
		storageCopy = self._storage[:]
		self._storage = []

		#Update limit
		self._limit = limit

		#Reinsert values
		for bucket in storageCopy:
			for tuple in bucket:
				self.insert(tuple[0], tuple[1])

	def insert(self, key, val):
		hashKey = self.getHash(key, self._limit)

		bucket = self._storage[hashKey] or []
		if len(bucket) > 0:
			collision = False
			for tuple in bucket:
				if tuple[0] == key:
					tuple[1] = val
					collision = True
			if collision == False:
				bucket.append([key, val])
				self._size += 1
		else:
			bucket.append([key, val])
			self._storage[hashKey] = bucket
			self._size += 1

		if self._size > self._limit * .75:
			self._resize(self._limit * 2)

	def retrieve(self, key):
		hashKey = self.getHash(key, self._limit)

		bucket = self._storage[hashKey]
		if len(bucket) > 0:
			for tuple in bucket:
				if tuple[0] == key:
					return tuple[1]
			return False
		return False

	def remove(self, key):
		hashKey = self.getHash(key, self._limit)

		bucket = self._storage[hashKey]
		if len(bucket) > 0:
			for tuple in bucket:
				if tuple[0] == key:
					bucket.remove(tuple)
					self._size -= 1
					return tuple[1]
			return False
		return False

	def contains(self, key):
		hashKey = self.getHash(key, self._limit)

		bucket = self._storage[hashKey]
		if len(bucket) > 0:
			for tuple in bucket:
				if tuple[0] == key:
					return True
			return False
		return False

	def size(self):
		return self._size

	def getHash(string, max):
		hashKey = 0
		for char in string:
			hashKey = (hashKey << 5) + hashKey + ord(char)
			hashKey = hashKey & hashKey
			hashKey = abs(hashKey)
		return hashKey % max









