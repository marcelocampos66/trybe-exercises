window.onload = function () {
  createStateOptions();
}

const estadosBrasileiros = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

const tagSelectStates = document.querySelector('#input-estado');
function createStateOptions() {
  for (index = 0; index < estadosBrasileiros.length; index += 1) {
    const options = document.createElement('option');
    options.innerText = estadosBrasileiros[index]
    options.name = 'estado';
    tagSelectStates.appendChild(options);
  }
}

function saveForm(event) {
  event.preventDefault();
  const formInputs = document.querySelectorAll('.form-item');
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].type === 'radio' && formInputs[index].checked) {
      continue;
    }
    const getDivData = document.querySelector('#consolided-data');
    const newDiv = document.createElement('div');
    newDiv.className = 'data';
    getDivData.appendChild(newDiv);
    newDiv.innerHTML = formInputs[index].value;
  }
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', saveForm);

function clearAllFields() {
  const dataForms = document.querySelector('#consolided-data');
  const getData = document.querySelectorAll('.data');
  for (let index = 0; index < getData.length; index += 1) {
    dataForms.lastChild.remove();
  }
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearAllFields)
