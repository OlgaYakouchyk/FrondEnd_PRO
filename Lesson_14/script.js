// async function fetchUser() {
//   const url = `https://jsonplaceholder.typicode.com/users`;
//   try {
//     const responce = await fetch(url);
//     const userData = await responce.json();
//     console.log(userData);
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// fetchUser();

// async function fetchPost() {
//   const url = `https://jsonplaceholder.typicode.com/posts`;
//   try {
//     const responce = await fetch(url);
//     const userPost = await responce.json();
//     console.log(userPost);
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// fetchPost()

// Создать функцию, которая получает id пользователя и выводит
// в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”.
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>

async function fetchUser1(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  try {
    const responce = await fetch(url);
    if (!responce.ok) {
      throw new Error("Error");
    }
    const userData = await responce.json();
    return userData;
  } catch (error) {
    console.log(error.massage, "there is no user");
  }
}

fetchUser1(2);

async function fetchPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Post fetch was not successfull.");
    }
    const userPosts = await response.json();
    return userPosts;
  } catch (e) {
    console.error(e.message, "There is no post with this id");
  }
}

fetchPost(2);

// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка:
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта

// {
//  user: {name, email},
//  posts: [...]
// }

// Создать функцию, которая генерирует div с данными о пользователе и всеми его постами.
//  Возвращаемая карточка должна иметь следующую структуру. 


async function fetchUserAnaPost(userId) {
  try {
    const user = await fetchUser1(userId);
    const posts = await fetchPost(userId);
   
    // const [user, posts] = await Promise.all([userFetch, postFetch]);
    if (!user && !posts) {
      throw new Error("Both user and post fetch was not completed.");
    }
    // Находим элементы в DOM, в которые нужно вставить данные
      const userContainer = document.querySelector('.user');
      const postsContainer = document.querySelector('.posts');
  
//       // Вставляем данные о пользователе
      const userName = userContainer.querySelector('p:nth-child(1)');
      userName.textContent = `Имя пользователя: ${user.name}`;
  
      const userEmail = userContainer.querySelector('p:nth-child(2)');
      userEmail.textContent = `Почта пользователя: ${user.email}`;
      const postTitle = document.createElement('h3')
      const postDescription = document.createElement('p')
      postTitle.textContent = posts.title
      postDescription.textContent = posts.body

      postsContainer.appendChild(postTitle)
      postsContainer.appendChild(postDescription)


  } catch (error) {
    console.log(e.massage, "there is no post and user");
  }
}

fetchUserAnaPost(3);

// //диструктиризация
// const arr = [1123124, 'hello']

// const [first, second] = arr

// console.log(second)

// const obj = {
//     myName: 'Yury',
//     myAge: 26,
//     myExp: 6,
//     isProgrammer: true
// }

// const {myName, myExp} = obj
// console.log(myName, myExp)

// Написать функцию (отдельную, не связанную с функционалом выше)
// которая в консоль будет выводить улицу, на которой живет пользователь
// // По айпишнику должна отрабатывать

// async function fetchAddress(id) {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   try {
//     const responce = await fetch(url);
//     if (!responce.ok) {
//       throw new Error("Error");
//     }
//     const userData = await responce.json();
//     console.log(userData.address);
//   } catch (error) {
//     console.error(error.massage, "there is no user");
//   }
// }

// fetchAddress(1)

// Вытащить в консоль body

// async function fetchBody(id) {
//   const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Post fetch was not successfull.");
//     }
//     const post = await response.json();
//     console.log(post.body);
//   } catch (e) {
//     console.error(e.message, "There is no post with this id");
//   }
// }

// fetchBody(1);


// async function fetchTitle(id) {
//     const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Title fetch was not successfull.");
//       }
//       const todos = await response.json();
//       console.log(todos.title);
//     } catch (e) {
//       console.error(e.message, "There is no title with this id");
//     }
//   }
  
//   fetchTitle(7)

//   Если completed true то выводим все тайтлы на страницу с
//  помощью работы в дом деревом (создаем элемент, туда передает текст)
//   На этот раз работаем без айпишников и получаем сразу все


//   async function fetchTitleCompleted() {
//     const url = `https://jsonplaceholder.typicode.com/todos/`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Title fetch was not successfull.");
//       }
//       const todos = await response.json();
//       const conteiner = document.querySelector('.conteiner')
      
//       todos.forEach(todos =>{
//         if(todos.completed){
//             const newElement = document.createElement('div')
//             newElement.textContent = todos.title
//             conteiner.appendChild(newElement)
//         }
//       })       
//     } catch (e) {
//       console.error(e.message, "There is no title with this id");
//     }
//   }
  
//   fetchTitleCompleted()




