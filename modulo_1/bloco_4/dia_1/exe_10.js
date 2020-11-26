let custo = 40;
let valorVenda = 100;

if (custo >= 0 && valorVenda >= 0) {
    let impostoSobreOCusto = custo * 0.2;
    let valorCustoTotal = (custo + impostoSobreOCusto);
    let lucro = (valorVenda - valorCustoTotal);
    let lucroTotal = lucro * 1000;
    console.log(lucroTotal);
} else {
    console.log('Erro');
}

