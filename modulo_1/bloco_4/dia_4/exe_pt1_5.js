let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente = 'Sim'
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente = 'Sim'
};

for (let propriedades in info) {
    if(info[propriedades] == 'Sim') {
        console.log('Ambos recorrentes')
    }
    
    //console.log(info[propriedades] + 'e' + info2[propriedades]);
}
