function fetchDog() {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => Promise.resolve(data))
  .catch(Promise.reject(data));
}

module.exports = fetchDog;