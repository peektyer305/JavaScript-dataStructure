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
    dequeFront(){
        if(this.head === null) { 
            return null;
        }
       let temp = this.head;
       this.head = this.head.next;
       if(this.head === null){ 
        this.tail = null;
       }else{
        this.head.prev = null;
       }
       return temp.data;
    }
    dequeBack(){
        if(this.tail === null){
            return null;
        }
        let temp = this.tail;
        this.tail = this.tail.prev;
        if(this.tail === null){
            this.head = null;
        }else{
            this.tail.next = null;
        }
        return temp.data;
    }
}
//両端キューを使って配列の中の最大値を検索する関数．新たな最大値を両端キューの一番前（先頭）に入れる。
//逆に見た数字が今まで見つけた最大値よりも小さければ、その数字を両端キューの一番後ろ（最後）に入れる．計算量はO(n)となる．
function getMaximum(arr){
    let deque = new Deque();
    deque.enqueueFront(arr[0]);

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > deque.peekFront())deque.enqueueFront(arr[i]);
        else deque.enqueueBack(arr[i]);
    }
    return deque.peekFront();
}
//サイズｋの部分配列から最大値を見つける関数.スライディングウィンドウのアルゴリズムを使って計算します．
function getMaxWindows(arr,k){
    if(k > arr.length)return [];

    let results = [];
    let deque = [];

    for(let  i = 0; i < k; i++){
        while(deque.length > 0 && arr[deque[0]] <= arr[i]){
            deque.pop();
        }
        deque.push(i);
    }

    for(let i = k; i < arr.length; i++){
        results.push(arr[deque[0]]);

        while(deque.length > 0 && deque[0] <= i-k){
            deque.shift();
        }
        while(deque.length > 0 && arr[deque[deque.length-1]] <= arr[i]){
            deque.pop();
        }
        deque.push(i);
    }
    results.push(arr[deque[0]]);
    return results;
}