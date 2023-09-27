class BinaryTree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const binary = new BinaryTree(1);
const node2 = new BinaryTree(2);
const node3 = new BinaryTree(3);

 binary.left = node2;
 binary.right = node3;

 
 // 根ノードのデータを表示
console.log("Root: " + binaryTree.data);
// 左の子ノードのデータを表示
console.log("Left: " + binaryTree.left.data);
// 右の子ノードのデータを表示
console.log("Right: " + binaryTree.right.data);