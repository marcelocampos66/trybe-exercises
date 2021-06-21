// const fs = require('fs/promises');
const fs = require('fs').promises;

const simpsons = 'simpsons.json';

// 4.1

fs.readFile(simpsons, 'utf-8')
  .then((response) => JSON.parse(response))
  .then((data) => {
    data.map(({ id, name }) => console.log(`${id} - ${name}`))
  });

// 

// 4.2

async function getCharById(id) {
  const allChars = await fs.readFile(simpsons, 'utf-8')
    .then((response) => JSON.parse(response));

  const chosenChar = allChars.find((char) => parseInt(char.id) === id);
  
  if (!chosenChar) {
    throw new Error('id não encontrado');
  }
  return console.log(chosenChar);
}

getCharById(1);

//  

// 4.3

async function removeIds10And6() {
  const allChars = await fs.readFile(simpsons, 'utf-8')
    .then((response) => JSON.parse(response));

  const newArray = allChars
    .filter((char) => parseInt(char.id) !== 10 && parseInt(char.id) !== 6);

  console.log(newArray);

  await fs.writeFile(simpsons, JSON.stringify(newArray));
};

removeIds10And6();

//

// 4.4

async function createSimpsonsFamily() {
  const allChars = await fs.readFile(simpsons, 'utf-8')
    .then((response) => JSON.parse(response));

  const ids = [1, 2, 3, 4];

  const family = allChars.filter((char) => ids.includes(parseInt(char.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
};

createSimpsonsFamily();

// 

// 4.5

async function addNelson() {
  const simpsonsFamily = 'simpsonsFamily.json';
  const family = await fs.readFile(simpsonsFamily, 'utf-8')
    .then((response) => JSON.parse(response));

  const nelson = {
    id: '5',
    name: 'Nelson Muntz',
  };
  
  const newArray = [...family, nelson];

  await fs.writeFile(simpsonsFamily, JSON.stringify(newArray));
}

addNelson();

// 

// 4.6

async function substituteNelson() {
  const simpsonsFamily = 'simpsonsFamily.json';
  const family = await fs.readFile(simpsonsFamily, 'utf-8')
    .then((response) => JSON.parse(response));

  family.find((char) => {
    if (char.name === 'Nelson Muntz') char.name = 'Maggie Simpson';
  });

  await fs.writeFile(simpsonsFamily, JSON.stringify(family));
}

substituteNelson();

// 
