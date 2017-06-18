class BinaryNode {

    constructor(value, leftChild, rightChild,key) {
        if (!arguments.length) {
            this.value = null;
        } else {
            this.value = value;
        }
        this.leftChild = this.rightChild = null;
        this.key = key;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }
    getKey() {
        return this.key;
    }

    setKey(key) {
        this.key = key;
    }

    getLeftChild() {
        return this.leftChild;
    }

    setLeftChild(leftChild) {
        this.leftChild = leftChild;
    }

    getRightChild() {
        return this.rightChild;
    }

    setRightChild(rightChild) {
        this.rightChild = rightChild;
    }

    isLeaf() {
        return (this.leftChild == null) && (this.rc == null);
    }

}

export default class BST {
    constructor() {
        this.root = null;
        this.appendSuccess = false;
        this.MAX_LEVEL = 5;
        this.keyIndex = 0;
    }

    findhelp(root, value) {
        if (root == null)
            return false;
        else if (value < root.getValue())
            return this.findhelp(root.getLeftChild(), value);
        else if (value > root.getValue())
            return this.findhelp(root.getRightChild(), value);
        else
            return true;
    }

    appendhelp(root, value, level) {
        if (level >= this.MAX_LEVEL) {
            this.appendSuccess = false;
            console.log('树高超过限高' + this.MAX_LEVEL + '层!');
            console.log('本次append ' + value + ' 取消');
            return null;
        }
        if (root == null)
            return new BinaryNode(value,null,null,this.keyIndex++);
        else if (value < root.getValue())
            root.setLeftChild(this.appendhelp(root.getLeftChild(), value, level + 1));
        else
            root.setRightChild(this.appendhelp(root.getRightChild(), value, level + 1));
        return root;
    }

    deletemin(root, deleteNode) {
        if (root.getLeftChild() == null) {
            deleteNode.setValue(root.getValue());
            deleteNode.setKey(root.getKey());
            return root.getRightChild();
        } else {
            root.setLeftChild(this.deletemin(root.getLeftChild(), deleteNode));
            return root;
        }
    }

    deleteSuccess = false;

    deletehelp(root, value) {
        if (root == null)
            return null;
        else if (value < root.getValue())
            root.setLeftChild(this.deletehelp(root.getLeftChild(), value));
        else if (value > root.getValue())
            root.setRightChild(this.deletehelp(root.getRightChild(), value));
        else {
            this.deleteSuccess = true;
            if (root.getLeftChild() == null)
                root = root.getRightChild();
            else if (root.getRightChild() == null)
                root = root.getLeftChild();
            else {
                root.setRightChild(this.deletemin(root.getRightChild(), root))
            }
        }
        return root;
    }

    preorderHelp(root) {
        if (root == null)
            return;
        console.log(root.getValue());
        this.preorderHelp(root.getLeftChild());
        this.preorderHelp(root.getRightChild());
    }

    inorderHelp(root) {
        if (root == null)
            return;
        this.inorderHelp(root.getLeftChild());
        console.log(root.getValue());
        this.inorderHelp(root.getRightChild());
    }

    posterorderHelp(root) {
        if (root == null)
            return;
        this.posterorderHelp(root.getLeftChild());
        this.posterorderHelp(root.getRightChild());
        console.log(root.getValue());
    }

    getHeightHelp(root) {
        if (root == null)
            return 0;
        return 1 + Math.max(this.getHeightHelp(root.getLeftChild()), this.getHeightHelp(root.getRightChild()))
    }

    getCountHelp(root) {
        if (root == null)
            return 0;
        return 1 + this.getCountHelp(root.getLeftChild()) + this.getCountHelp(root.getRightChild());

    }
    getNode(position) {
        if (this.root == null)
            return null;
        var array = [];
        var length = Math.pow(2, this.getHeight()) - 1;
        array.push(this.root);
        for (var i = 0; (i < length) && (i !== position + 1); i++) {
            if (array[i] != null) {
                if (2 * i + 1 < length)
                    array[2 * i + 1] = array[i].getLeftChild();
                if (2 * i + 2 < length)
                    array[2 * i + 2] = array[i].getRightChild();
            } else {
                if (2 * i + 1 < length)
                    array[2 * i + 1] = null;
                if (2 * i + 2 < length)
                    array[2 * i + 2] = null;
            }
        }
        return array[position];
    }

    find(value) {
        return this.findhelp(this.root, value);
    }

    append(value) {
        this.appendSuccess = false;
        this.root = this.appendhelp(this.root, value, 0);
        return this.appendSuccess;
    }

    // 该方法按值来删除，不适合演示
    // delete(position) {
    //     var value = this.get(position);
    //     if (value == null)
    //         return null;
    //     this.deleteSuccess = false;
    //     this.root = this.deletehelp(this.root, value);
    //     return this.deleteSuccess;
    // }

    delete(position) {
        var deleteNode = this.getNode(position);
        if (deleteNode == null)
            return;
        if (deleteNode.getLeftChild() == null)
            deleteNode = deleteNode.getRightChild();
        else if (deleteNode.getRightChild() == null)
            deleteNode = deleteNode.getLeftChild();
        else {
            deleteNode.setRightChild(this.deletemin(deleteNode.getRightChild(), deleteNode));
        }
        if (position === 0) {
            this.root = deleteNode;
            return;
        }
        var parentPosition = Math.floor((position - 1) / 2);
        var parentNode = this.getNode(parentPosition);
        if (2 * parentPosition + 1 === position)
            parentNode.setLeftChild(deleteNode);
        else
            parentNode.setRightChild(deleteNode);
    }

    get(position) {
        if (this.root == null)
            return null;
        var array = [];
        var length = Math.pow(2, this.getHeight()) - 1;
        array.push(this.root);
        for (var i = 0; (i < length) && (i !== position + 1); i++) {
            if (array[i] != null) {
                if (2 * i + 1 < length)
                    array[2 * i + 1] = array[i].getLeftChild();
                if (2 * i + 2 < length)
                    array[2 * i + 2] = array[i].getRightChild();
            } else {
                if (2 * i + 1 < length)
                    array[2 * i + 1] = null;
                if (2 * i + 2 < length)
                    array[2 * i + 2] = null;
            }
        }
        if (array[position] == null)
            return null;
        return array[position].getValue();
    }

    getKey(position) {
        if (this.root == null)
            return null;
        var array = [];
        var length = Math.pow(2, this.getHeight()) - 1;
        array.push(this.root);
        for (var i = 0; (i < length) && (i !== position + 1); i++) {
            if (array[i] != null) {
                if (2 * i + 1 < length)
                    array[2 * i + 1] = array[i].getLeftChild();
                if (2 * i + 2 < length)
                    array[2 * i + 2] = array[i].getRightChild();
            } else {
                if (2 * i + 1 < length)
                    array[2 * i + 1] = null;
                if (2 * i + 2 < length)
                    array[2 * i + 2] = null;
            }
        }
        if (array[position] == null)
            return null;
        return array[position].getKey();
    }

    preorder() {
        this.preorderHelp(this.root);
    }

    inorder() {
        this.inorderHelp(this.root);
    }

    posterorder() {
        this.posterorderHelp(this.root);
    }

    getHeight() {
        return this.getHeightHelp(this.root);
    }

    getCount() {
        return this.getCountHelp(this.root);
    }

    getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    generateBST(nodeCount) {
        for (var i = 0; i < nodeCount; i++)
            this.append(this.getRandomInteger(9, 0));
    }

    print() {
        var length = Math.pow(2, this.getHeight()) - 1;
        if (!length) {
            console.log("[]");
            return;
        }
        var result = "[";
        for (var i = 0; i < length - 1; i++)
            result += this.get(i) + ",";
        result += this.get(i) + "]";
        console.log(result);
    }
    // ====================
    randomAdd() {
        this.append(this.getRandomInteger(9, 0));
    }
    remove(position) {
        return this.delete(position);
    }
}



