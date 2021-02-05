const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsList = Animals.filter((animal) => animal.age === age);
      if (animalsList.length !== 0) {
        return resolve(animalsList);
      };
      const messageError = 'Nenhum animal com essa idade!';
      return reject(messageError);
    }, 2000);
  })
);

const getAnimalsByAge = (age) => {
  return findAnimalsByAge(age).then(animal => animal);
};

module.exports = getAnimalsByAge;