// como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?
// podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável.


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
