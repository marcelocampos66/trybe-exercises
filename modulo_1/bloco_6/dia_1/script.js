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
  const formInputs = document.querySelectorAll('input');
  for (let index = 0; index < formInputs.length; index += 1) {
    newDiv.innerHTML = formInputs[index].value;
  }
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', saveForm);
