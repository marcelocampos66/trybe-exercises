// podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado
// EXEMPLO 1
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// EXEMPLO 2
const getPosition = (latitude, longitude) => (
  {
  latitude,
  longitude,
  }
);

console.log(getPosition(-19.8157, -43.9542));