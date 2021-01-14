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
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EXERCICIO 1
function addNewKey(object, key, value) {
  object[key] = value;
};

addNewKey(lesson2, 'turno', 'noite')
console.log(lesson2);

// EXERCICIO 2
function showKeys(object) {
  const result = Object.keys(object);
  return result;
}
console.log(showKeys(lesson1));

// EXERCICIO 3
function showSizeObject(object) {
  const result = Object.keys(object).length;
  return result;
}
console.log(showSizeObject(lesson3));


// EXERCICIO 4
function showValues(object) {
  const result = Object.values(object);
  return result;
}
console.log(showValues(lesson2));


// EXERCICIO 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
