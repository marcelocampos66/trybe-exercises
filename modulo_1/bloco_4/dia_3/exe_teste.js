let n = 5
let espaco = ' ';
let asterisco = '*';

for (let indexLinha = 0; indexLinha < n; indexLinha += 2) {
    let linha =  '';
    let numAsteriscos = 1 + indexLinha;
    let espacosEsquerda = (n - numAsteriscos) / 2;
    let espacosDireita = (n - numAsteriscos) / 2;
    for( let indexColuna = 0; indexColuna < n; indexColuna += 1) {
        if (indexColuna < espacosEsquerda) {
            linha += espaco;
        } else if (indexColuna >= espacosEsquerda && indexColuna < n - espacosDireita) {
            linha += asterisco;
        } else {
            linha += espaco;
        }
    }
    console.log(linha);
}