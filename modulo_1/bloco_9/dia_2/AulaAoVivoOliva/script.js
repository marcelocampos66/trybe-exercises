const appendJoke = (joke) => {
  const li = document.createElement('li');
  const ul = document.querySelector('ul');

  li.innerText = joke;
  ul.appendChild(li);
}

// const fetchJoke = () => {

//   const param = { headers: { Accept: 'application/json' } };

//   fetch('https://icanhazdadjoke.com/search?term=spider', param)
//         .then((response) =>
//           response.json()
//             .then((data) => {
//               appendJoke(data.results[0].joke);
//               fetch("https://icanhazdadjoke.com/search?term=ghost", param)
//                 .then((response) =>
//                   response.json()
//                     .then((data) => {
//                       appendJoke(data.results[0].joke);
//                       fetch("https://icanhazdadjoke.com/search?term=pizza", param)
//                         .then((response) =>
//                           response.json()
//                             .then((data) => {
//                               appendJoke(data.results[0].joke);
//                               fetch("https://icanhazdadjoke.com/search?term=wolf", param)
//                                 .then((response) =>
//                                   response.json()
//                                     .then((data) => {
//                                       appendJoke(data.results[0].joke);
//                                       fetch("https://icanhazdadjoke.com/search?term=ant", param)
//                                         .then((response) =>
//                                           response.json()
//                                             .then((data) => {
//                                               appendJoke(data.results[0].joke);
//                                             })
//                                         )
//                                     })
//                                 )
//                             })
//                         )
//                     })
//                 )
//             })
//         )

// }

const getJoke = (term) => {
  return new Promise((resolve, reject) => {
    const param = { headers: { Accept: 'application/json' } };
    fetch(`https://icanhazdadjoke.com/search?term=${term}`, param)
      .then((response) => {
        response.json()
          .then((data) => {
            const joke = data.results[0].joke;
            appendJoke(joke);
            resolve();
          });
      });
  });
}

const fetchJoke = () => {
  getJoke('spider')
    .then(() => getJoke('ant') )
    .then(() => getJoke('wolf') )
    .then(() => getJoke('pizza') )
    .then(() => getJoke('cake') )
}

const fetchJokeAsyncAwait = async () => {
  try {
    await getJoke('spider');
    await getJoke('ant');
  } catch (error) {

  }
}


window.onload = () => fetchJoke();