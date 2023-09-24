const array = [1, 7, 6, 3, 98, 75];

// const sum = array.reduce(function(prevus, current){
//     return prevus+current
// });
// console.log(sum);

// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   count += array[i];
// }
// console.log(count);

// const btn = document.querySelector('.btn')
// const currentValue = localStorage.getItem('numKey')
// if(currentValue === null){
//     localStorage.setItem('numKey', '0')
// }

// btn.addEventListener('click', function(){
//     const currentValue = localStorage.getItem('numKey')
//     let newValue;
//     if (currentValue === '0'){
//         newValue= '1'
//     } else{
//         newValue = '0'
//     }

//     localStorage.setItem('numKey', newValue)
//     console.log(newValue);

// })

// const actionForm = document.querySelector('#actionForm')
// const inputFielder = document.querySelector('#inputFielder')
// const btn = document.querySelector('.btn')
// const defaultKey = 'inputValue'
// actionForm.addEventListener('submit', function(event){
//     event.preventDefault()

//     let newvalue = inputFielder.value
//     localStorage.setItem(defaultKey, newvalue)
// })

// btn.addEventListener('click', function(){
//     localStorage.removeItem(defaultKey)
//     inputFielder.value = ''

// })

// const toggleBtn = document.querySelector("#toggleBtn");
// const mainbody = document.body;

// const currentValue = localStorage.getItem("currentValue");// при перезапуске страница получаем текущее состояние

// if (currentValue === "darkMode") {
//   mainbody.classList.add("darkMode");
// }
// else if (currentValue === "lightMode") {
//   mainbody.classList.add("lightMode");
// }

// toggleBtn.addEventListener("click", function () {
//     mainbody.classList.toggle("darkMode")
//     let currentColor = "lightMode"
//     if(mainbody.classList.contains("darkMode")){
//         currentColor = "darkMode"
//     }
//     // else{
//     //     currentColor = "lightMode"
//     // }

//     localStorage.setItem("currentValue", currentColor)

// });

const toggleBtn = document.querySelector("#toggleBtn");
const mainbody = document.body;

function toggleDarkMode() {
  mainbody.classList.toggle("darkMode");
  const isDarkMode = mainbody.classList.contains("darkMode");
  localStorage.setItem("darkMode", isDarkMode)
}
const savedDarkMode = localStorage.getItem('darkMode')
if(savedDarkMode === 'true'){
    mainbody.classList.add("darkMode")
}

toggleBtn.addEventListener("click", toggleDarkMode);
