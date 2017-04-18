class TTNode {
    constructor(leftValue, rightValue, left, center, right) {
        if (arguments.length) {
            this.leftValue = leftValue;
            this.rightValue = rightValue;
            this.left = left;
            this.center = center;
            this.right = right;
        } else {
            this.leftValue = this.rightValue = this.left = this.center = this.right = null;
        }
    }

    isLeaf() {
        return this.left == null;
    }

    add(it) {
        if (this.rightValue == null) {
            if (this.leftValue <= it.leftValue) {
                this.rightValue = it.leftValue;
                this.right = it.center;
                this.center = it.left;
            } else {
                this.rightValue = this.leftValue;
                this.right = this.center;
                this.leftValue = it.leftValue;
                this.center = it.center;
                this.left = it.left;
            }

            return this;
        } else if (this.leftValue > it.leftValue) {
            var newNode = new TTNode(this.leftValue, null, it, this, null);
            this.leftValue = this.rightValue;
            this.rightValue = null;
            this.left = this.center;
            this.center = this.right;
            this.right = null;

            return newNode;
        } else if (this.rightValue <= it.leftValue) {
            newNode = new TTNode(this.rightValue, null, this, it, null);
            this.rightValue = null;
            this.right = null;

            return newNode;
        } else {
            newNode = new TTNode(this.rightValue, null, it.center, this.right, null);
            this.center = it.left;
            this.rightValue = null;
            this.right = null;
            it.left = this;
            it.center = newNode;

            return it;
        }
    }

    delete(child) {
        if (child === this.left) {
            if (this.center.rightValue == null) {
                this.center.rightValue = this.center.leftValue;
                this.center.leftValue = this.leftValue;
                this.leftValue = this.rightValue;
                this.rightValue = null;
                this.center.right = this.center.center;
                this.center.center = this.center.left;
                this.center.left = child.left;
                child.left = null;
                this.left = this.center;
                this.center = this.right;
                this.right = null;
            } else {
                child.leftValue = this.leftValue;
                this.leftValue = this.center.leftValue;
                this.center.leftValue = this.center.rightValue;
                this.center.rightValue = null;
                child.center = this.center.left;
                this.center.left = this.center.center;
                this.center.center = this.center.right;
                this.center.right = null;
            }
        } else if (child === this.center) {
            if (this.left.rightValue == null) {
                this.left.rightValue = this.leftValue;
                this.leftValue = this.rightValue;
                this.rightValue = null;
                this.left.right = child.left;
                child.left = null;
                this.center = this.right;
                this.right = null;
            } else {
                child.leftValue = this.leftValue;
                this.leftValue = this.left.rightValue;
                this.left.rightValue = null;
                child.center = child.left;
                child.left = this.left.right;
                this.left.right = null;
            }
        } else {
            if (this.center.rightValue == null) {
                this.center.rightValue = this.rightValue;
                this.rightValue = null;
                this.center.right = child.left;
                child.left = null;
                this.right = null;
            } else {
                child.leftValue = this.rightValue;
                this.rightValue = this.center.rightValue;
                this.center.rightValue = null;
                child.center = child.left;
                child.left = this.center.right;
                this.center.right = null;
            }
        }
    }

}


export default class TTTree {
    constructor() {
        this.root = null;
        this.MAX_HEIGHT = 3;
    }

    getRoot() {
        return this.root;
    }

    appendHelp(root, value) {
        var returnRoot = null;
        if (root == null)
            return new TTNode(value, null, null, null, null);
        if (root.isLeaf())
            return root.add(new TTNode(value, null, null, null, null));
        if (value < root.leftValue) {
            returnRoot = this.appendHelp(root.left, value);
            if (returnRoot === root.left)
                return root;
            else
                return root.add(returnRoot);
        } else if ((root.rightValue == null) || (value < root.rightValue)) {
            returnRoot = this.appendHelp(root.center, value);
            if (returnRoot === root.center)
                return root;
            else
                return root.add(returnRoot);
        } else {
            returnRoot = this.appendHelp(root.right, value);
            if (returnRoot === root.right)
                return root;
            else
                return root.add(returnRoot);
        }
    }

    findHelp(root, value) {
        if (root == null)
            return false;
        else if (root.leftValue > value)
            return this.findHelp(root.left, value);
        else if ((root.leftValue < value) && ((root.rightValue == null) || (root.rightValue > value)))
            return this.findHelp(root.center, value);
        else if ((root.rightValue != null) && (root.rightValue < value))
            return this.findHelp(root.right, value);
        else
            return true;
    }

    getParent(child) {
        var node = [];
        node.push(this.root);
        for (var i = 0; i < node.length; i++) {
            if (node[i] != null) {
                if ((node[i].left === child) || (node[i].center === child) || (node[i].right === child)) {
                    return node[i];
                }
                if (!node[i].isLeaf()) {
                    node.push(node[i].left);
                    node.push(node[i].center);
                    node.push(node[i].right);
                }
            }
        }
    }

    deletemin(root, deleteNode, sign) {
        if (root.left == null) {
            if (!sign)
                deleteNode.leftValue = root.leftValue;
            else
                deleteNode.rightValue = root.leftValue;
            root.leftValue = root.rightValue;
            root.rightValue = null;
        } else {
            this.deletemin(root.left, deleteNode, sign);
        }
        if (root.leftValue == null) {
            this.adjust(root);
        }
    }

    deleteHelp(root, value) {
        if (root == null)
            return;
        if (value < root.leftValue)
            this.deleteHelp(root.left, value);
        else if ((value > root.leftValue) && ((root.rightValue == null) || (root.rightValue > value)))
            this.deleteHelp(root.center, value);
        else if ((root.rightValue != null) && (value > root.rightValue))
            this.deleteHelp(root.right, value);
        else if (value === root.leftValue) {
            if (root.left == null) {
                root.leftValue = root.rightValue;
                root.rightValue = null;
            }
            else {
                this.deletemin(root.center, root, 0);
            }
        }
        else {
            if (root.left == null) {
                root.rightValue = null;
            }
            else
                this.deletemin(root.right, root, 1);
        }
        if (root.leftValue == null)
            this.adjust(root);
    }

    adjust(root) {
        if (root === this.root) {
            this.root = this.root.left;
            return;
        }
        var parent = this.getParent(root);
        parent.delete(root);
    }

    getHeightHelp(root) {
        if (root == null)
            return 0;
        return 1 + this.getHeightHelp(root.left);
    }

    copyTTTree() {
        if (root == null)
            return null;
        var node = [];
        node.push(this.root);
        var copy = [];
        var nodeLength = (Math.pow(3, this.getHeight()) - 1) / 2;
        node.push(this.root);
        for (var i = 0; i < nodeLength; i++) {
            if (node[i] != null) {
                if (3 * i + 1 < nodeLength)
                    node[3 * i + 1] = node[i].left;
                if (3 * i + 2 < nodeLength)
                    node[3 * i + 2] = node[i].center;
                if (3 * i + 3 < nodeLength)
                    node[3 * i + 3] = node[i].right;
            } else {
                if (3 * i + 1 < nodeLength)
                    node[3 * i + 1] = null;
                if (3 * i + 2 < nodeLength)
                    node[3 * i + 2] = null;
                if (3 * i + 3 < nodeLength)
                    node[3 * i + 3] = null;
            }
        }

        var newNode = null;
        for (i = 0; i < node.length; i++) {
            if (node[i] != null)
                newNode = new TTNode(node[i].leftValue, node[i].rightValue, null, null, null);
            else
                newNode = null;
            copy.push(newNode);
        }
        for (i = 0; i < copy.length; i++) {
            if ((copy[i] != null)) {
                if (3 * i + 3 < copy.length) {
                    copy[i].left = copy[3 * i + 1];
                    copy[i].center = copy[3 * i + 2];
                    copy[i].right = copy[3 * i + 3];
                }
            }
        }
        return copy[0];
    }

    append(value) {
        var oldRoot = this.copyTTTree();
        this.root = this.appendHelp(this.root, value);
        if (this.getHeight() > this.MAX_HEIGHT) {
            console.log('树高超过限高' + this.MAX_HEIGHT + '层!');
            console.log('本次append ' + value + ' 取消');
            this.root = oldRoot;
        }
    }

    find(value) {
        return this.findHelp(this.root, value);
    }

    delete(position) {
        var value = this.get(position);
        if (value == null)
            return;
        this.deleteHelp(this.root, value);
    }

    get(position) {
        if (this.root == null)
            return null;
        var node = [];
        var value = [];
        var nodeLength = (Math.pow(3, this.getHeight()) - 1) / 2;
        node.push(this.root);
        for (var i = 0, j = 0; (i < nodeLength) && (j !== position + 1); i++ , j += 2) {
            if (node[i] != null) {
                value[j] = node[i].leftValue;
                value[j + 1] = node[i].rightValue;
                if (3 * i + 1 < nodeLength)
                    node[3 * i + 1] = node[i].left;
                if (3 * i + 2 < nodeLength)
                    node[3 * i + 2] = node[i].center;
                if (3 * i + 3 < nodeLength)
                    node[3 * i + 3] = node[i].right;
            } else {
                value[j] = null;
                value[j + 1] = null;
                if (3 * i + 1 < nodeLength)
                    node[3 * i + 1] = null;
                if (3 * i + 2 < nodeLength)
                    node[3 * i + 2] = null;
                if (3 * i + 3 < nodeLength)
                    node[3 * i + 3] = null;
            }
        }
        return value[position];

    }

    getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    generateTTTree(nodeCount) {
        for (var i = 0; i < nodeCount; i++) {
            var num = this.getRandomInteger(9, 0);
            this.append(num);
        }
        console.log("随机生成的二三树：")
        this.print();
    }

    getHeight() {
        return this.getHeightHelp(this.root);
    }

    print() {
        var valueLength = Math.pow(3, this.getHeight()) - 1;
        if (!valueLength) {
            console.log("[]");
            return;
        }
        var result = "[";
        for (var i = 0; i < valueLength - 1; i++)
            result += this.get(i) + ",";
        result += this.get(i) + "]";
        console.log(result);
    }

    randomAdd() {
		var num = this.getRandomInteger(9, 0)
		console.log("随机添加的数为："+num);
        this.append(num);
    }

    remove(position) {
        return this.delete(position);
    }

}


// WEBPACK FOOTER //
// ./src/tttree/TTTree.js