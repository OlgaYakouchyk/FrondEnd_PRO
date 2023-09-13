// const arrayNumb = [2,5,7,98,3,65,-4,-2,-9];

// const newArr = arrayNumb.map(function(item){
//     return item*2
// })
// console.log(newArr);

// const newArrRed = arrayNumb.reduce(function(emptyValue, currentValue){
//     return emptyValue + currentValue
// })
//  console.log(newArrRed);

// const someArr = ["hello", "apple", "one", "first", "second", 2, 6, -7, 34, 98];

// const newSomeArr = someArr
//   .filter(function (item) {
//     return typeof item === "number";
//   })
//   .reduce(function (prevVolue, currentValue) {
//     return prevVolue + currentValue;
//   });
// console.log(newSomeArr);

// const transactions = [
//   { type: "приход", amount: 100 },
//   { type: "расход", amount: 50 },
//   { type: "приход", amount: 200 },
//   { type: "расход", amount: 75 },
// ];

// const newAmount = transactions.reduce(function (balance, currentValue) {
//   if (currentValue.type === "приход") {
//     return balance + currentValue.amount;
//   } else if (currentValue.type === "расход") {
//     return balance - currentValue.amount;
//   }
//   return balance;
// }, 0);

// console.log(`Сумма на вашем счете составляет: ${newAmount}$`);

// localStorage.setItem('randomnString', 'Hello')

// const arrNumbers = [4,9,8,3,7]
// const keyRandomnStr = localStorage.getItem('randomnString')
// console.log(keyRandomnStr);

//     if(keyRandomnStr){
//         const sumArr = arrNumbers.reduce(function(sum, currentValue){
//             return sum + currentValue

//         })
//         console.log(sumArr);
//     }else{
//         console.log('----------');
//     }

// const object = {
//     username: 'log',
//     theme: 'dark',
//     fontSaze: '20px'
// };

// const userSettings = JSON.stringify(object)//перево обект в строку
// localStorage.setItem('userSettings', userSettings)
// console.log(userSettings);
// const sevedSettings = localStorage.getItem('userSettings')
// const userStoreSettings = JSON.parse(userSettings)// перевод строки в объект
// console.log(userStoreSettings);

// Задание. Имеется строка со структурой массива. Используя объект JSON преобразуйте данную строку в массив,
// добавьте в нее еще пару чисел и преобразуйте обратно в строку.

// const line = "[1,2,3]"
// // const newLine = JSON.stringify(line)
// const newObject = JSON.parse(line)
// console.log(newObject);
// newObject.push(6,8,4)
// console.log(newObject);
// const newStr =JSON.stringify(newObject);
// console.log(newStr);

// Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении нового товара.
// Реализовывать через массив с продуктами и функцией rerender.

let prodacts = [];
function addProduct(name, price) {
  const productItem = {
    name: name,
    price: price,
  };

  prodacts.push(productItem);
  rerender();
}

function rerender() {
  const productList = document.querySelector("#productList");
  productList.innerHTML = "";
  prodacts.forEach(function (product) {
    const listItem = document.createElement("li");
    listItem.textContent = product.name + "-$" + product.price;
    productList.appendChild(listItem);
  });
}

const productForm = document.querySelector("#productForm");
productForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;

  if (productName && productPrice){
    addProduct(productName, parseFloat(productPrice))
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
  }else{
    alert('введите название и цену товара')
  }
});

rerender()
