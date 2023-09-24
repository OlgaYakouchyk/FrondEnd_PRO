// Задача на setTimeout с использованием Promise:
// Создайте функцию, которая возвращает Promise и 
// выполняет setTimeout внутри.

// function returnSetTimeout(){
//     return new Promise (function(resolved, rejected){
//         setTimeout(function(){
//             resolved ('"Завершено после 2000 миллисекунд"')
//         }, 2000)
//     })
// }

// returnSetTimeout()
//         .then(function(result){
//             console.log(result);
//         })
//         .catch(function(error){
//             console.log(error);
//         })



// Создайте несколько функций, каждая из которых возвращает Promise. Затем используйте метод then для выполнения
//  этих Promise последовательно в определенном порядке.



// function stepOne() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Шаг 1 завершен');
//       }, 1000);
//     });
//   }
  
//   function stepTwo() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Шаг 2 завершен');
//       }, 1500);
//     });
//   }

//   stepOne()
//     .then((message) => {
//       console.log(message);
//       return stepTwo();
//     })
//     .then((message) => {
//     .then((message) => {
//       console.log(message);
//     });

// function delayPromise(delay,message) {
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(`${message}. Выполниться через ${delay} секунд`)
//         },delay)
//     })
// }

// const promiseOne = delayPromise(3000,"Шаг 1 завершен")
// const promiseTwo = delayPromise(4000, "Шаг 2 завершен")
// const promiseThree = delayPromise(5000,"Шаг 3 в процессе")

// promiseOne.then(function(result){
//         console.log(result)
//     })
// promiseTwo.then(function(result){
//         console.log(result)
//     })
// promiseThree.then(function(result){
//         console.log(result)
//     })