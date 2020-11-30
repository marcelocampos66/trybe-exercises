let n = 5;
let linha = '';
let asterisco = '*';
let espaco = ' ';

let meio = (n+1) / 2;
let esquerda = meio;
let direita = meio;

for (let indexLinha = 0; indexLinha <= meio; indexLinha += 1) {
    for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
        if(indexColuna > direita && indexColuna < esquerda) {
            linha += asterisco;
        } else {
            linha += espaco;
        }
    }
    console.log(linha);
    linha = '';
    esquerda += 1;
    direita -= 1;
}
