class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    push(data){
        const tempNode = this.head;
        this.head = new Node(data);
        this.head.next = tempNode;
    }
    pop(){
        if(this.head === null)return null;
        const temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }
    peek(){
        if(this.head === null)return null;
        return this.head.data;
    }
}
//配列（リスト）を受け取り、その中で単調減少している最後の部分リストを探し出し、その部分リストを返す関数。
function consecutiveArr(arr){
    let stack = [];
    stack.push(arr[0]);
//スタックの一番上より大きい要素があった場合，スタックの中をからにする．
    for(let i = 1; i < arr.length; i++){
        if(stack[stack.length-1] < arr[i] || stack[0] < arr[i]){
            while(stack.length > 0){
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }
    let resultArr = [];
    while(stack.length > 0){
        resultArr.unshift(stack.pop());
    }
    return resultArr;
}
console.log(consecutiveArr([3,4,20,45,56,6,4,3,5,3,2]));