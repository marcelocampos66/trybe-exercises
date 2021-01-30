const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// capturar caso de sucesso = .then()
// capturar a falha = .catch()

// O que eh Fetch API e para que ele serve?
// No dia anterior você viu superficialmente o que é e pra que serve a função fetch . Hoje você aprenderá a usá-la. A função fetch , como já visto, é responsável por enviar requisições a APIs . Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.
// O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON ou respostas que possam ser reformatadas para tal.