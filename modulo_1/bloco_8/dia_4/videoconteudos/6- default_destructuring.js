// EXEMPLO 3

const phrase = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

const { nationality = 'Brazilian' } = person;

console.log(phrase(otherPerson)); // Ivan is Russian
console.log(phrase(person));
// console.log(teste);