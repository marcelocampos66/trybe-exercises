const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EXERCICIO 8
function verificaPares(object, key, value) {
  const arrayEntries = Object.entries(object);
  let result = false;
  for (let index = 0; index < arrayEntries.length; index += 1) {
    if(arrayEntries[index][0] === key && arrayEntries[index][1] === value) {
      result = true;
    }
  }
  return result;
}
console.log(verificaPares(lesson3, 'materia', 'Maria Clara'));
