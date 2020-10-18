class BSTNode {
    public data: number
    public left: BSTNode
    public right: BSTNode

    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

export class BinarySearchTree {
    private root: BSTNode

    constructor() {
        this.root = null
    }

    public insert(data: number) {
        const newNode = new BSTNode(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }

        return this
    }

    private insertNode(node: BSTNode, newNode: BSTNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    public search(data: number, node: BSTNode = this.root): BSTNode {
        if (node === null) {
            return null
        }

        if (data < node.data) {
            return this.search(data, node.left)
        }

        if (data > node.data) {
            return this.search(data, node.right)
        }

        if (data === node.data) {
            return node
        }
    }

    public remove(data: number): BinarySearchTree {
        this.root = this.removeNode(this.root, data)

        return this
    }

    private minNode(node: BSTNode): BSTNode {
        if (node.left === null) {
            return node
        }

        return this.minNode(node.left)
    }

    private removeNode(node: BSTNode, data: number): BSTNode {
        if (node === null) {
            return null
        }

        if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        }

        if (data > node.data) {
            node.right = this.removeNode(node.right, data)
            return node
        }

        if (data === node.data) {
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            if (node.left === null) {
                node = node.right
                return node
            }

            if (node.right === null) {
                node = node.left
                return node
            }

            let minNode = this.minNode(node.right)
            node.data = minNode.data

            node.right = this.removeNode(node.right, minNode.data)

            return node
        }
    }
}