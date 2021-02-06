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

const mockFetchJoke = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(result)
}));

test('Verifica se retorna uma piada', () => {
  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
