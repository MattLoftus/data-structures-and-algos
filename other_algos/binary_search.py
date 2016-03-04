import math

#Implemnt binary search on a sorted array
def binarySearch(arr, value):
	left = 0
	right = len(arr) -1

	while left != right:
		middle = math.floor( (right - left) / 2)
		if arr[middle] = value:
			return True
		elif left == middle:
			if arr[middle + 1] == value:
				return True
			else:
				return False
		elif arr[middle] < value:
			left = middle
		else:
			right = middle

	return False