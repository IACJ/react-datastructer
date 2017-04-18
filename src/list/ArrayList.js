export default class ArrayList {
    constructor (){
        this.arr = [];
        this.length = 0;
    }


    insert (position, elem) {
        if ((position < 0) || (position > this.length)) {
            console.log("位置超出范围");
            return;
        }
        for (var i = this.length; i > position; i--)
            this.arr[i] = this.arr[i - 1];
        this.arr[position] = elem;
        this.length++;
    }

    append(elem) {
        this.arr[this.length++] = elem;
    }

    clear() {
        this.arr = null;
        this.length = 0;
        this.arr = [];
    }

    remove (position) {
        if ((position < 0) || (position > this.length) || (position === this.length)) {
            console.log("位置超出范围");
            return false;
        }
        var elem = this.arr[position];
        for (var i = position; i < this.length - 1; i++)
            this.arr[i] = this.arr[i + 1];
        this.length--;
        return elem;
    }

    update (position, elem) {
        if ((position < 0) || (position > this.length) || (position === this.length)) {
            console.log("位置超出范围");
            return;
        }
        this.arr[position] = elem;
    }

    get(position) {
        if ((position < 0) || (position > this.length) || (position === this.length)) {
            console.log("位置超出范围");
            return;
        }
        return this.arr[position];
    }

    contains (elem) {
        for (var i = 0; i < this.length; i++)
            if (this.arr[i] === elem)
                return true;
        return false;
    }

    indexOf (elem) {
        for (var i = 0; i < this.length; i++)
            if (this.arr[i] === elem)
                return i;
        return -1;
    }

    lastIndexOf (elem) {
        for (var i = this.length; i > -1; i--)
            if (this.arr[i] === elem)
                return i;
        return -1;
    }
    reverse () {
        for (var i = 0; i < this.length / 2; i++) {
            var temp = this.arr[i];
            this.arr[i] = this.arr[this.length - 1 - i];
            this.arr[this.length - 1 - i] = temp;
        }
    }

    isEmpty  () {
        if (this.length)
            return false;
        return true;
    }

    getLength () {
        return this.length;
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

    buildListWithRandomInteger (length) {
        for (var i = 0; i < length; i++)
            this.append(this.getRandomInteger(9, 0));
        console.log("随机生成的线性表：")
        this.print();
    }

    randomAdd(){
        this.append(this.getRandomInteger(9, 0));
    }
}


