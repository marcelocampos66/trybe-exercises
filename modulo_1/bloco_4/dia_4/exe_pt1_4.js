let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = 'Sim';

for (let key in info) {
    console.log(info[key]);
}

// Se o for/in incrementa pela CHAVE
//o for/off incrementa pelo VALOR (SO FUNCIONA COM ARRAY)
