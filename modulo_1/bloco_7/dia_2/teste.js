const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};


function showSizeObject(object) {
  const result = Object.keys(object).length;
  return result;
}
console.log(showSizeObject(lesson1));

const showSizeObject2 = (object) => Object.keys(object).length;
console.log(showSizeObject2(lesson1));

const showSizeObject3 = (object) => {
  Object.keys(object).length;
};
console.log(showSizeObject3(lesson1));
