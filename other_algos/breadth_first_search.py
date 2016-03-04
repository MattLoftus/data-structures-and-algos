#Breadth first search of a tree.
#Tree class
class Tree():
    def __init__(self, value):
        self.val = value
        self.children = []

    def addChild(self, value):
        self.children.append(Tree(value))

    def contains(self, value):
        if self.val == value:
            return True
        else:
            for node in self.children:
                if node.contains(value):
                    return True
            return False
        
#Breadth first search
def bfs(tree, value):
    queue = [tree]
    
    while len(queue):
        node = queue.pop()
        if node.val == value:
            return True
        else:
            for child in node.children:
                queue.insert(0, child)
            return False
            
	return False

