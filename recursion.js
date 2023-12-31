// 7 × n を計算する関数．再帰的に
function multiplyOf7(n){
    if(n <= 0 ){
        return 0;
    }
    return multiplyOf7(n-1) +7;
}
//m x 7 を再帰的に
function multiplyOfMN(m,n){
    if(n === 0){
        return 0;
    }
    return multiplyOfMN(m,n-1) +m;
}

//文字列ｓの長さを再帰的に
function lengthOfString(s){
    if(s === '')return 0;

    return lengthOfString(s.slice(0,-1)) +1;
}

//1からnまでの総和
function summation(n){
    if( n <= 0 )return 0;

    return summation(n-1) + n;
}
//総和の総和
function summationOfSummation(n){
    if(n <= 0)return 0;

    return summation(n) + summationOfSummation(n-1);
}
//1からｎまでの整数の積
function factorial(n){
    if(n <= 0) return 1;

    return factorial(n-1) * n;

}

//パスカルの三角形,x番目の三角形に含まれるドットの数を返す
function numberOfDots(x){
    if(x <= 0)return 0;

    return numberOfDots(x-1) + x;
}
//文字列を再帰的に逆表示する
function reverseString(s){
    if(s.length <= 0) return s;

    return s[s.length-1] + reverseString(s.slice(0,-1));
}
//2つの自然数の最大公約数を再帰的に求める関数
function getgcd(m,n){
    if((m % n) === 0){
        return n;
    }else{
        return getgcd(n,m % n);
    }
}
//数字をそれぞれ分割して足す
function splitAndAdd(digits){
    if(digits < 10)return digits;
return digits % 10 + splitAndAdd(Math.floor(digits / 10));
}
//フィボナッチ数列，この時間計算量は O(2**n)空間計算量O(n)
function fibonaccinumber(n){    
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }
    return fibonaccinumber(n-1) + fibonaccinumber(n-2);
}
//末尾再帰
function summationTail(n){
    return helper(n,0)
}
function helper(count,total){
    if( count <= 0)return total;
    return helper(count-1,total+count);
}
/*simpleSummationの時間・空間計算量＝O(n),O(n)
末尾再帰 = O(n),O(1) */


