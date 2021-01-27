const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const errorMessage = `Robot is busy`;

function chanceOfGettingTemperature() {
  const result = Math.floor(Math.random() * 100);
  return result;
}

// definição da função sendMarsTemperature...
function sendMarsTemperature(fahrenheitConverter, dealWithError) {
  const temperature = getMarsTemperature();
  return setTimeout(() => {
    return (chanceOfGettingTemperature() > 60) ? dealWithError(errorMessage) : fahrenheitConverter(temperature);
  }, messageDelay());
}


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);