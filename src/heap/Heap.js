export default class Heap {
    constructor() {
        this.heap = [];
        this.length = 0;
        this.isMaxHeap = true;
    }

    isLeaf(position) {
        return (position > Math.floor(this.length / 2) - 1) && (position < this.length);
    }

    getLength() {
        return this.length;
    }

    leftChild(position) {
        return 2 * position + 1;
    }

    rightChild(position) {
        return 2 * position + 2;
    }

    parent(position) {
        return Math.floor((position - 1) / 2);
    }

    swap(index1, index2) {
        var temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    compareAccordingToHeapType(num1, num2) {
        if (this.isMaxHeap) {
            if (num1 > num2)
                return true;
            return false;
        } else {
            if (num1 < num2)
                return true;
            return false;
        }
    }

    siftdown(position) {
        while (!this.isLeaf(position)) {
            var require = this.leftChild(position);
            var rc = this.rightChild(position);
            if ((rc < this.length) && (this.compareAccordingToHeapType(this.heap[rc], this.heap[require])))
                require = rc;
            if (this.compareAccordingToHeapType(this.heap[position], this.heap[require]))
                return;
            this.swap(position, require);
            position = require;
        }
    }

    getHeapType() {
        if (this.isMaxHeap)
            return "MaxHeap";
        return "MinHeap";
    }

    buildHeap() {
        for (var i = Math.floor(this.length / 2) - 1; i > -1; i--)
            this.siftdown(i);
    }

    buildHeapWithArray(array) {
        for (var i = 0; i < array.length; i++){
            this.heap[i] = array[i];
        }
        this.length = array.length;
        this.buildHeap();
    }

    append(elem) {
        var current = this.length++;
        this.heap[current] = elem;
        while ((current !== 0) && (this.compareAccordingToHeapType(this.heap[current], this.heap[this.parent(current)]))) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }
    /* 该方法暂时不用*/
    insert(position, elem) {
        if ((position > this.length) || (position < 0)) {
            console.log("位置超出范围");
            return;
        }


        for (var i = this.length; i > position; i--)
            this.heap[i] = this.heap[i - 1];
        this.heap[position] = elem;
        this.length++;
        this.buildHeap();
    }

    removeTop() {
        if (!this.length){
            console.log("位置超出范围");
            return false;
        }
            
        this.swap(0, --this.length);
        if (this.length)
            this.siftdown(0);
        return this.heap[this.length];
    }

    delete(position) {
        if ((position < 0) && (position > this.length - 1)){
            console.log("位置超出范围");
            return false;
        }
        
            
        this.swap(position, --this.length);
        if (position === this.length)
            return Heap[this.length];
        while ((position !== 0) && (this.compareAccordingToHeapType(position, this.parent(position)))) {
            this.swap(position, this.parent(position));
            position = this.parent(position);
        }
        if (this.length){
            this.siftdown(position);
        }         
        return Heap[this.length];
    }

    toggleMaxOrMinHeap() {
        if (this.isMaxHeap)
            this.isMaxHeap = false;
        else
            this.isMaxHeap = true;
        this.buildHeap();
    }

    getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    generateHeap(length) {
        var array = [];
        for (var i = 0; i < length; i++)
            array[i] = this.getRandomInteger(9, 0);
        this.buildHeapWithArray(array);
        console.log("随机生成的堆：")
        this.print();
    }
    print() {
        var result = "[";
        for (var i = 0; i < this.length - 1; i++)
            result += this.heap[i] + ",";
        result += this.heap[this.length - 1] + "]";
        console.log(result);
    }

    // 获取位置为i的元素的值
    get(i){
        return this.heap[i];
    }

    // 与delete同功能的remove函数
    remove(position) {
        this.delete(position);
    } 
    
    // 随机增添一个数
    randomAdd(){
        this.append(this.getRandomInteger(9, 0)); 
    }   
}

