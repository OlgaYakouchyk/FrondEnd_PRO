// function fetchPostData(userId, callBack){
//     const url = `https://jsonplaceholder.typicode.com/users/${userId}`
//     fetch(url)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//          callBack(data)
//     })
//     .catch(function(error){
//         console.log(error);
//     })
// }
// fetchPostData(1, function(userData){
//     console.log('Данные пользователя с id', ':', userData);
// })

// fetchPostData(5, function(userData){
//     console.log('Данные пользователя с id', ':', userData);
// })

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({title: 'foo', body: 'bar', userId: 1 }),
  headers: { 'Content-type': 'application/json; charset=UTF-8'},
})
  .then((response) => response.json())
  .then((data) => console.log(data));