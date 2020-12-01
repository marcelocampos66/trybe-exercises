let n = 5;
let asterisco = '*';
let linha = [];
let coluna;

for(let indexLinha = 0; indexLinha <  n; indexLinha += 1) {
    linha = linha + asterisco;
};

for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
    console.log(linha);
};


