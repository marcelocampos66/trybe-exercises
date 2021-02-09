const result = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200,
};

const fetchJoke = () => {
  return fetch('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => data.joke);
};

// criar um objeto parecido com o que a API me retorna.
// emulando a chamada de uma API

const fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(result)
}));

// const mockFetchJoke = jest.fn(fetchJoke);
// mockFetchJoke.mockResolvedValue('Whiteboards ... are remarkable.');

test('Verifica se retorna uma piada', () => {
  return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
