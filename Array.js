//スプレッド構文
const banana = {name:banana,price:200};
const goods1 = {...banana};
console.log(goods1);
const good2 = {...banana,name:apple,price:300,amount:3};
console.log(good2);