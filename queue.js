class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    construtor(){
        this.head = null;
        this.tail = null;
    }

    peekFront(){
        if(this.head === null)return null;
        return this.head.data;
    }
    peekBack(){
        if(this.tail === null)return null;
        return this.tail.data;
    }

    enqueue(data){
        if(this.head === null){
            this.head = new Node(data);
            this.tail = this.head;
        }else{
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }

    }

    dequeue(){
        if(this.head === null)return null;
        const temp = this.head;
        this.head = this.head.next;
        if(this.head === null) this.tail = null;
        
        return temp.data;
    }
}
const q = new Queue();
// 最初にキューの先頭と末尾を表示します。
console.log(q.peekFront());
console.log(q.peekBack());

// 4をキューに追加し、先頭と末尾を表示します。
q.enqueue(4);
console.log(q.peekFront());
console.log(q.peekBack());

// 50をキューに追加し、先頭と末尾を表示します。
q.enqueue(50);
console.log(q.peekFront());
console.log(q.peekBack());

// 64をキューに追加し、先頭と末尾を表示します。
q.enqueue(64);
console.log(q.peekFront());
console.log(q.peekBack());

// キューからデータを取り出し、取り出したデータを表示します。
console.log("dequeued: " + q.dequeue());
// キューの先頭と末尾を表示します。
console.log(q.peekFront());
console.log(q.peekBack());