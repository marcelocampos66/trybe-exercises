const array = [];

for (let i = 1; i <= 10; i += 1) {
  array.push(Math.round(Math.random() * 50));
};

const total = array.map(number => number * number).reduce((acc, nextNumber) => acc + nextNumber, 0);

// console.log(total);

const array2 = [2, 3, 5, 10];

const result = array2.map(divisor => Math.round(total / divisor));

const last = result.reduce((acc, number) => acc + number, 0);

console.log(last);
