const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

// EXERCICIO 6
// RESOLUCAO 1
function returnNumberOfStudents() {
  const students1 = allLessons.lesson1.numeroEstudantes;
  const students2 = allLessons.lesson2.numeroEstudantes;
  const students3 = allLessons.lesson3.numeroEstudantes;
  const totalStudents = students1 + students2 + students3;

  return totalStudents;
}
// console.log(returnNumberOfStudents());

// RESOLUCAO 2
// Por nao saber o nome da chave declarei a chave de arrayKeys dentro de []. exemplo `object[arrayKeys[index]].numeroEstudantes`

function returnNumberOfStudents2(object) {
  let total = 0;
  const arrayKeys = Object.keys(object);
  for (let index = 0; index < arrayKeys.length; index += 1) {
    total += object[arrayKeys[index]].numeroEstudantes;
  }
  return total;
}
// console.log(returnNumberOfStudents2(allLessons));


// EXERCICIO 7
function returnValueByNumber(object, number) {
  let result = Object.values(object)[number];
  return result;
}
// console.log(returnValueByNumber(allLessons, 0));
