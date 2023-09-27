//分割統治法を使って配列の合計値を求めてみる,再帰的に計算．
function sumOfArray(arr){
    return sumOfArrayHelper(arr,0,arr.length-1);
}

function sumOfArrayHelper(arr,start,end){
    if(start === end) return arr[start];

    let mid = Math.floor((start+end) /2);

    let leftArr = sumOfArrayHelper(arr,start,mid);
    let rightArr = sumOfArrayHelper(arr,mid+1,end);

    return leftArr+rightArr;
}
//Merge Sort

function mergeSort(arr){
    return mergeSortHelper(arr,0,arr.length-1);
}

function mergeSortHelper(arr,start,end){
    if(start === end) return arr;

    let middle =Math.floor( (start + end) / 2 );

    let leftArr = mergeSortHelper(arr, start,middle);
    let rightArr = mergeSortHelper(arr,middle+1,end);

    leftArr.push(Infinity);
    rightArr.push(Infinity);

    


}