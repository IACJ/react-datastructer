export default class HashTable {
    constructor() {
        this.arr = [];
        this.count = 0;
        this.loadFactor = 0.75;
        this.length = 10;
        this.threshold = Math.floor(this.loadFactor * this.length);
        this.EMPTY = null;
        this.TOMB_STONE = "۩";
        this.initArray();
    }

    initArray() {
        for (var i = 0; i < this.length; i++) {
            this.arr[i] = this.EMPTY;
        }
    }

    hash(elem) {
        return elem*elem % this.length;
    }

    probe(i) {
        return i * i;
    }

    rebuild(n) {
        if (n<=0){
            return false;
        }
        var old = this.arr;
        var oldLength = this.length;
        this.arr = [];
        this.length = n;
        this.threshold = this.length * this.loadFactor;
        this.count = 0;
        this.initArray();
        for (var i = 0; i < oldLength; i++)
            if (old[i] !== this.EMPTY && old[i] !== this.TOMB_STONE)
                this.insert(old[i]);
    }

    insert(elem) {
        // 当哈希表快满时，将表扩容
        // if (this.count === this.threshold)
        //     this.rebuild();


        var position = this.hash(elem);
        let times=1;
        for (var i = 1; ((this.arr[position] !== this.EMPTY) && (this.arr[position] !== this.TOMB_STONE)); i++) {
            times++;
            position = (this.hash(elem) + this.probe(i)) % this.length;
            if (times > 250){
                console.log("超过250次探测，未找到合适位置");
                console.log("插入取消");
                return false;
            }
        }
        this.arr[position] = elem;
        this.count++;
        //console.log("经过 "+times+"次探测,插入 "+elem);
    }

    find(elem) {
        var position = this.hash(elem);
        for (var i = 1; ((this.arr[position] !== this.EMPTY) && (this.arr[position] !== elem)); i++) {
            position = (this.hash(elem) + this.probe(i)) % this.length;
        }

        if (this.arr[position] === elem)
            return true;
        return false;
    }

    get(position) {
        if ((position < 0) || (position >= this.length)) {
            console.log("位置超出范围");
            return;
        }
        return this.arr[position];
    }

    delete(position) {
        if (this.get(position) === this.EMPTY || this.get(position) === this.TOMB_STONE)
            return false;
        this.arr[position] = this.TOMB_STONE;
        //this.count--;
    }

    print() {
        var result = "[";
        for (var i = 0; i < this.length - 1; i++)
            result += this.arr[i] + ",";
        result += this.arr[this.length - 1] + "]";
        console.log(result);
    }

    getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    generateHashTable() {
        for (var i = 0; i < 3; i++)
            this.insert(this.getRandomInteger(9, 0));
        console.log("随机生成的哈希表：")
        this.print();
    }

    randomAdd() {
        this.insert(this.getRandomInteger(9, 0));
    }

    getLength () {
        return this.length;
    }
    remove(position){
        this.delete(position); 
    }

    appendLenth(){
        this.rebuild(this.length+1);
    }
    cleanDeath(){
        this.rebuild(this.length);
    }
    
}