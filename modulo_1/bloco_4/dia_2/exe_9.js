let numbers = [];
let divResult = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

for (let indexNum = 0; indexNum < numbers.length; indexNum += 1) {
    console.log(numbers[indexNum] / 2);
}
