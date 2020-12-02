let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorString = '';

function maisCaracteres(names) {
    for (let index in names) {
        if (names[index].length > maiorString.length) {
            maiorString = names[index];
        }
    }
    return maiorString
}


console.log(maisCaracteres(names));
