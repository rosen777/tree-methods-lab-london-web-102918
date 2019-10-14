function inOrder(currentNode) {
    if(currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    if(newNode.data < rootNode.data) {
        if(rootNode.left) { 
            return findOrAdd(rootNode.left, newNode)
        } else {
            return rootNode.left = newNode
        }
    } else if(newNode.data > rootNode.data) {
        if(rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            return rootNode.right = newNode
        }
    } else if(newNode.data === rootNode.data) {
        return true
    }
}

function max(currentNode) {
    if(currentNode.right) {
         return max(currentNode.right)
    } else {
        return currentNode
    }
}

function min(currentNode) {
    if(currentNode.left){
        return min(currentNode.left)
    } else {
        return currentNode
    }
}