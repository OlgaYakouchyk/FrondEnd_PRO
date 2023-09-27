// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((responce)=>{
//     return responce.json()
// })
// .then((data) =>{
//     console.log(data);
// })

// Сначала выполните GET-запрос к ресурсу "users" для получения списка пользователей.
// Затем выполните GET-запрос к ресурсу "posts" для получения списка постов.
// Используя полученные данные о пользователях и постах, создайте новый массив объектов, где каждый объект будет содержать информацию о пользователе и его постах.

// const arrayObj = []

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((responce)=>{
//     return responce.json()
// })
// .then((dataUser) =>{
//     console.log(dataUser);
// })

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((responce)=>{
//     return responce.json()
// })
// .then((dataPost) =>{
//     const newObj = {dataUser, dataPost}
//     arrayObj.push(newObj)
//     console.log(arrayObj);

// })
// .catch((error) =>{
//     console.log(error);
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((responce) => responce.json())
//   .then((users) => {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(
//       (responce) => {
//         return responce.json();
//       }
//     ).then(posts =>{
//         const postItem = users.map((user)=>{
//             const postItem = posts.filter((item) => item.userId === user.id)
//             return {
//                 userId: user.id,
//                 userName: user.username,
//                 posts: postItem
//             }
//         })
//         console.log(postItem);
//     });
//   })
//   .catch((error) =>
//     console.log(error)
//   )
//_________________________________________________________________________
// необходимо по id поста достать данные про пост и про автора.

// function fetchPost(userId){
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//   .then((responce)=>responce.json()
//     )
//     .catch((error) => {
//       console.error('Ошибка при запросе поста:', error);
//       throw error;
//     });
// }
// function fetchAuthor(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error('Ошибка при запросе автора:', error);
//       throw error;
//     });
// }

// function fetchPostAndFetchAuthor(postId){
//   return fetchPost(postId)
//   .then(post => {
//     return fetchAuthor(post.userId)
//     .then(author => {
//       return {post, author}
//     })
//   })

//   .catch((error) => {
//     console.error('Ошибка при запросе автора:', error);
//     throw error;
//   });
// }

// fetchPostAndFetchAuthor(2)
// .then(({ post, author }) => {
//   console.log('Данные о посте:', post);
//   console.log('Данные об авторе:', author);
// })
// .catch((error) => {
//   console.error('Произошла ошибка:', error);
// });

// function someFun(a, b) {
//   return a + b;
// }

const someFun2 = (a, b) => a + b;

async function fethDataAsynscAwait(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

fethDataAsynscAwait()
.then(result =>{
  console.log('данные получены', result);
})
.catch(error =>{
  console.log(error);
})

async function fetchPost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return await response.json();
  } catch (error) {
    throw error;
  }
}
async function fetchAuthor(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return await response.json();
  } catch (error) {
    throw error;
  }
}


async function fetchPostAndFetchAuthor(postId){
  try {
    const post = await fetchPost(postId)
    const author = await fetchAuthor(post.userId)
    return {post, author}
  } catch (error) {
    throw error   
  }

}

async function main(){
  try {
    const {post, author} = await fetchPostAndFetchAuthor(1) // data -> post, author
    console.log('Данные о посте:', post);
    console.log('Данные об авторе:', author);
    
  } catch (error) {
    throw error
  }
}
main()






// async function fetchPost(postId) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     if (!response.ok) {
//       throw new Error(`Ошибка при запросе поста: ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// async function fetchAuthor(userId) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if (!response.ok) {
//       throw new Error(`Ошибка при запросе автора: ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
// async function fetchPostAndAuthor(postId) {
//   try {
//     const post = await fetchPost(postId);
//     const author = await fetchAuthor(post.userId);
//     return { post, author };
//   } catch (error) {
//     console.error('Произошла ошибка:', error);
//     throw error;
//   }
// }


// async function main() {
//   try {
//     const { post, author } = await fetchPostAndAuthor(1);
//     console.log('Данные о посте:', post);
//     console.log('Данные об авторе:', author);
//   } catch (error) {
//     console.error('Произошла ошибка:', error);
//   }
// }


// main();