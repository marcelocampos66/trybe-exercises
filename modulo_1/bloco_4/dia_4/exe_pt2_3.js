let numbers = [2, 4, 6, 7, 10, 0, -3];
let minorIndex = 999;

function returnMinorIndex(numbers) {
    for (let index in numbers) {
        if(numbers[index] < minorIndex) {
            minorIndex = index;
        }
    }
    return minorIndex;
}

console.log(returnMinorIndex(numbers));
