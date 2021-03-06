#Implement a Tree class
class Tree():

    def __init__(self, value):
        self.val = value
        self.children = []

    def addChild(self, value):
        self.children.append(Tree(value))

    #Contains is a depth first search
    def contains(self, value):
        if self.val == value:
            return True
        else:
            for node in self.children:
                if node.contains(value):
                    return True
            return False



# tree = Tree("bob")
# tree.addChild("tim")
# tree.addChild("larry")
# print(tree.contains("bob"))
# print(tree.contains("tim"))
# print(tree.contains("larry"))
# print(tree.contains("jim"))