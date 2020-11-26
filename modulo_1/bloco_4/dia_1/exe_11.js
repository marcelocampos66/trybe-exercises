let salario = 3500;
let aliquotaINSS;
let aliquotaIR;

if (salario <= 1556.94) {
    aliquotaINSS = salario * 0.08;
} else if (salario > 1556.94 && salario <= 2594.92) {
    aliquotaINSS = salario * 0.09;
} else if (salario > 2594.92 && salario <= 5189.82) {
    aliquotaINSS = salario * 0.11;
} else {
    aliquotaINSS = 570.88;
}

if (salario < 1903.98) {
    aliquotaIR = 0;
} else if (salario > 1903.98 && salario <= 2826.65) {
    aliquotaIR = salario * 0.075 - 142.8;
} else if (salario > 2826.65 && salario <= 3751.05) {
    aliquotaIR = salario * 0.15 - 354.8;
} else if (salario > 3751.05 && salario <= 4664.68) {
    aliquotaIR = salario * 0.225 - 636.13;
} else {
    aliquotaIR = salario * 0.275 - 869.36;
}

console.log('Salario Liquido: R$' + (salario - (aliquotaINSS + aliquotaIR)));