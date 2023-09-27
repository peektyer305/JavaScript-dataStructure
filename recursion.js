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