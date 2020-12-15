function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth() {
  let daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let IlDays = document.createElement('li');
    IlDays.innerText = day;
    
    if (day === 24 || day === 31) {
      IlDays.className = 'day holiday';
      daysList.appendChild(IlDays);
    } else if (day === 4 || day === 11 || day === 18) {
      IlDays.className = 'day friday-day';
      daysList.appendChild(IlDays);
    } else if (day === 25) {
      IlDays.className = 'day holiday friday-day';
      daysList.appendChild(IlDays);
    } else {
      IlDays.className = 'day';
      daysList.appendChild(IlDays);
    }
  }
}

createDaysOfMonth();
//

//Exercicio 2
function addHolidayButton() {
  let addButtonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerText = 'Feriados!';
  newButton.id = 'btn-holiday';
  addButtonContainer.appendChild(newButton);
}
addHolidayButton('Feriados');
//

//Exercicio 3
function changeHolidayColor() {
  let getButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let greenColor = 'green';
  getButton.addEventListener('click', function(){
    for (let index = 0; index < getHolidays.length; index += 1) {
      if( getHolidays[index].style.backgroundColor === greenColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = greenColor;
      }
    }
  })
}
changeHolidayColor();
//

//Exercicio 4
function addFridayButton () {
  let addButtonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  addButtonContainer.appendChild(newButton);
  newButton.innerText = 'Sexta-Feira!';
}
addFridayButton('Sexta-feira');
//

//Exercicio5
function changeFridayButton() {
  let getButton = document.querySelector('#btn-friday');
  let getFridays = document.getElementsByClassName('friday-day');
  let saveFridays = [4, 11, 18, 25];
  let sextou = 'SEXTOU!';

  getButton.addEventListener('click',function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerText === sextou) {
        getFridays[index].innerText = saveFridays[index];
      } else {
        getFridays[index].innerText = sextou;
      }
    }
  })
}
changeFridayButton();
//

//Exercicio6
function applyZoomEffect() {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseover', function(trigger){
    trigger.target.style.transform = 'scale(1.8)';
  })
};

function deactivateZoomEffect() {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseout', function(trigger){
    trigger.target.style.transform = 'scale(1)';
  })
};
applyZoomEffect();
deactivateZoomEffect();
//

//Exercicio7
function addPersonalTask(task) {
  let getDivTag = document.querySelector('.my-tasks');
  let createSpan = document.createElement('span');
  
  createSpan.innerText = task;
  getDivTag.appendChild(createSpan);
}
addPersonalTask('Corrida da Pampulha');
//

//Exercicio8
function addLegendColor(cor) {
  let getTaskContainer = document.querySelector('.my-tasks');
  let addNewTask = document.createElement('div');
  addNewTask.className = 'task';
  addNewTask.style.backgroundColor = cor;
  getTaskContainer.appendChild(addNewTask);
}
addLegendColor('blue');
//

//Exercicio9
//Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function changeTaskClass() {
  let getMyTask = document.querySelector('.task');
  let getSelectedTask = document.getElementsByClassName('task selected');
  getMyTask.addEventListener('click', function(event) {
    if (getSelectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
changeTaskClass();
console.log(changeTaskClass());
//