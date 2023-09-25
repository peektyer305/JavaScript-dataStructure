class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class Deque{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    peekFront(){
        if(this.head === null) return null;
        return this.head.data;
    }
    peekBack(){
        if(this.tail === null) return null;
        return this.tail.data;
    }
    enqueueFront(data){
        if(this.head === null){
            this.head = new Node(data);
            this.tail = this.head;
        }else{
            this.head.prev = new Node(data);
            //ここではhead.prevはheadよりも前→最前の要素．nextはback側．
            this.head.prev.next = this.head;
            this.head = this.head.prev;

        }
    }
    enqueueBack(data){
        if(this.head === null) {
        this.head = new Node(data);
        this.tail = this.head;
        }else{
            //this.tail.next→最も後ろ．ただし，tailが最も後ろにならなければいけないのでこのthis.tail.nextは仮の入れ物．最後にthis.tailに参照渡ししてあげる．
            this.tail.next = new Node(data);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
    }
    dequeueFront(){
        if(this.head === null) { return null;
        }
       let temp = this.head;
       this.head = this.head.next;
       if(this.head === null){ this.tail = null;
       }else{

       }
    }
    dequeueBack(){

    }
}