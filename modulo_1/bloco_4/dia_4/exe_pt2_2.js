let numbers = [2, 3, 6, 7, 10, 1];
let higherIndex = 0;

function returnHigherIndex(numbers) {
    for (let index in numbers) {
        if(numbers[index] > higherIndex) {
            higherIndex = index;
        }
    }
    return higherIndex;
}

console.log(returnHigherIndex(numbers));
