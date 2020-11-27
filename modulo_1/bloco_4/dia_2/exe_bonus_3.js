let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMult = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index === numbers.length - 1) {
        arrayMult.push(numbers[index] * 2);
    } else {
        arrayMult.push(numbers[index] * numbers[index+1])
    }
}

console.log(arrayMult);


[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]