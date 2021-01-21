
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// { name: nome do aluno, average: media das notas }
// vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos

// ideias : usar o map para construir o objeto
// e usar o reduce para conseguir a media das notas

function studentAverage() {
  const studentsInfo = students.map((student, index) =>
  ({
    name: student,
    average: grades[index],
  }))
  .reduce(() => ,0)
  return studentsInfo;
}
console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// assert.deepStrictEqual(studentAverage(), expected);