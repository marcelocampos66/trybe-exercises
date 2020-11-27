let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minorNumber = 999;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < minorNumber) {
        minorNumber = numbers[index];
    };
}

console.log(minorNumber);
