// const someArr = [2, 4, 6, 3, 24, 5, 6, 78, 9];

// someArr.forEach(function(item){
//     console.log(item+1);
// })

// console.log(someArr);
// const result = someArr.map(function(item){
//     //  return Math.pow(item, 2);
//     return item >5;
// })
// console.log(result);

// const resultFilrt  = someArr.filter(function(item){
//     return item >5;
// })
// console.log(resultFilrt);

// const result2 = someArr.filter(function (item) {
//   // return item >8;
//   return item % 2 === 0;
// });
// console.log(result2);

// const result3 = someArr.sort(function (a, b) {
//   return a - b;
// });

// console.log(result3);

// const goods = [
//   { id: 1, title: "велосипед", price: 45000 },
//   { id: 2, title: "самокат", price: 15000 },
//   { id: 3, title: "сноуборд", price: 20000 },
//   { id: 4, title: "лыжи", price: 22000 },
// ];

// goods.sort(function (a, b) {
//   // return a.price-b.price
//   return b.price - a.price;
// });
// console.log(goods);

// const newArr = [2, 5, 7, 54, 34, 23, 6, 3, 1];

// newArr.sort(function(a,b){
//     // return a-b;
//     return b-a;
// });
// console.log(newArr);

// const resultNew = newArr.reduce(function(previosValue, currentValue){
//     return previosValue + currentValue;
// })
// console.log(resultNew);

// const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbersArr
//   .filter(function (item) {
//     return item % 2 === 0;
//   })
//   .map(function (item) {
//     return Math.pow(item, 2);
//   });
// console.log(result);

const goods = [
  { id: 1, title: "велосипед", price: 45000 },
  { id: 2, title: "самокат", price: 15000 },
  { id: 3, title: "сноуборд", price: 20000 },
  { id: 4, title: "лыжи", price: 22000 },
];

// goods.sort(function (a, b) {
//   return b.id - a.id;
// });
// console.log(goods);

// const resultNumbers = numbersArr.reduce(function(previosValue, currentValue){
//         return previosValue + currentValue;
//     }, 3);
//     console.log(resultNumbers);

// const sumArr = numbersArr
// .filter(function(item){
//     return item %2 ===0;
// })
// .reduce(function(previosValue, currentValue){
//     return previosValue+currentValue;
// });
// console.log(sumArr);

const sumGoods = goods.reduce(function (maxPrice, item) {
  if (item.price > maxPrice) {
    return item.price;
  }
  return maxPrice;
});
console.log(sumGoods);
