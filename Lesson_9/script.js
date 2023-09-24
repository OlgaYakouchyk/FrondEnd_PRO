// function fetchData(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve('success')
//         }, 3000)
//     })
// }

// fetchData()
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function(error){
//         console.log(error);
//     })

function methRandomMethod() {
  return new Promise(function (resolve, reject) {
    const randomNumber = Math.random();
    if (randomNumber >= 0.4) {
      resolve(`Позитив ${randomNumber}`);
    } 
    else {
      reject(`Негатив, ${randomNumber}`);
    }
  });
}

methRandomMethod()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//   Задача. Создать два промиса. Первый должен вызвать resolve через 2 секунды, 
//   а второй через 5. Для задержки используйте setTimeout

  function promiseOne() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Появился через 3 секунды")
        }, 3000)
    })
}
function promiseTwo() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Появился через 5 секунд")
        }, 5000)
    })
}
// promiseOne()
//     .then(function(result){
//         console.log(result)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// promiseTwo()
//     .then(function(result){
//         console.log(result)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

    function delayPromis(delay){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(`выполниться через  ${delay} секунд`)
            }, delay)
        })
    }

    const promis1 = delayPromis(3000)
    const promis2 = delayPromis(5000)
    promis1.then(function(result){
                console.log(result)
            })
            .catch(function(error){
                console.log(error)
            })

    promis2.then(function(result){
                console.log(result)
            })
            .catch(function(error){
                console.log(error)
            })