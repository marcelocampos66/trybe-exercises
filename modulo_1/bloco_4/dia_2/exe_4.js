let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbersSoma = 0;
mediaArit = 0;

for (index = 0; index < numbers.length; index += 1) {
    numbersSoma += numbers[index];
    mediaArit = numbersSoma / numbers.length;
}

if (mediaArit > 20) {
    console.log('valor maior que 20');
} else {
    console.log ('valor menor ou igual a 20');
}
