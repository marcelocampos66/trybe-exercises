window.onload = () => {
  fetchJoke();
}
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => document.getElementById('jokeContainer').innerText = data.joke)
};

// function chanceOfGettingAJoke() {
//   const result = Math.round(Math.random() * 100);
//   return result;
// }
// console.log(chanceOfGettingAJoke());

const promessa = () => {
  const result = new Promise((resolve, reject) => {
    const array = [];

    for (let i = 1; i <= 10; i += 1) {
      array.push(Math.round(Math.random() * 50));
    };

    const total = array.map(number => number * number)
    .reduce((acc, nextNumber) => acc + nextNumber, 0);

    (total < 8000) ? resolve() : reject();

  })

  result
  .then(number => [2, 3, 5, 10].map(divisor => Math.round(number / divisor)))
  .then(array => {
    const result = array.reduce((acc, number) => acc + number, 0);
    return console.log(`Sucess! O valor eh ${result}`);
  })
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));

}

promessa();
