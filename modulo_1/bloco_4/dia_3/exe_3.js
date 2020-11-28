let n = 5;
let asterisco = '*';
let espaco = ' ';
let linha = '';
let limite = n;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
        if (indexColuna < limite) {
            linha = linha + espaco;
        } else {
            linha = linha + asterisco;
        }
    }
    console.log(linha);
    linha = '';
    limite -= 1;
}
