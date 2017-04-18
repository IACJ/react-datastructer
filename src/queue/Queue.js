export default class Queue {
    constructor() {
        this.arr = [];
        this.inlist = [];
        this.outlist = [];
        this.length = 0;
        this.pushtimes = 0;
        this.poptimes = 0;
    }

    getLength() {
        return this.length;
    }

    push(Elem) {
        this.inlist[this.pushtimes] = Elem;
        this.pushtimes++;
        this.arr[this.length] = Elem;
        this.length++;
    }

    pop() {
        if(this.length <= 0) {
            console.log("队已空！");
            return;
        }
        this.length--;
        this.outlist[this.poptimes] = this.arr[0];
        this.poptimes++;
        for(var i = 0; i < this.length; ++i) {
            this.arr[i] = this.arr[i + 1];
        }
    }

    print() {
        var result = "[";
        for(var i = 0; i < this.length - 1; ++i) {
            result += this.arr[i] + ',';
        }
        result += this.arr[this.length - 1] + ']';
        console.log(result);
    }

    printinlist() {
        var result = "[";
        if (this.pushtimes === 0) return '[null]';
        for(var i = 0; i < this.pushtimes - 1; ++i) {
            result += this.inlist[i] + ',';
        }
        result += this.inlist[this.pushtimes - 1] + ']';
        return result;
    }

    printoutlist() {
        var result = "[";
        if (this.poptimes === 0) return '[null]';
        for(var i = 0; i < this.poptimes - 1; ++i) {
            result += this.outlist[i] + ',';
        }
        result += this.outlist[this.poptimes - 1] + ']';
        return result;
    }

    count() {
        return this.length;
    }

    get(pos) {
        if(pos < 0 || pos >= this.length) {
            console.log("位置超出范围");
            return;
        }
        return this.arr[pos];
    }

    getpushtimes() {
        return this.pushtimes;
    }

    getpoptimes() {
        return this.poptimes;
    }

    clear() {
        this.length = 0;
        this.arr = [];
        this.inlist = [];
        this.outlist = [];
        this.pushtimes = 0;
        this.poptimes = 0;
    }
    //======
    getRandomInteger(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }
    randomAdd(){
        let rand = this.getRandomInteger(9, 0);
        console.log("随机添加数 : "+rand);
        this.push(rand); 
    }
    generateQueue(length) {
        for (var i = 0; i < length; i++){ 
            this.push(this.getRandomInteger(9, 0));
        }
        console.log("随机生成的队列：")
        this.print();
    }   
}
