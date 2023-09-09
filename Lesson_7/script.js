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

//     let value = inputFielder.value
//     localStorage.setItem(defaultKey, value)
// })

// btn.addEventListener('click', function(){
//     localStorage.removeItem(defaultKey)
//     inputFielder.value = ''

// })

const toggleBtn = document.querySelector("#toggleBtn");
const mainbody = document.body;

toggleBtn.addEventListener('click', function() {
    mainbody.classList.toggle('lightMode')
    localStorage.setItem('darkMade', )
});
