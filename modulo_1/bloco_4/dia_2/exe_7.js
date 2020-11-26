let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minorNumber = 0;

for (index = 0; index < numbers.length; index += 1) {
    numbers.sort(function(a,b){return a-b});
    minorNumber = numbers[0];
}

console.log(minorNumber);
