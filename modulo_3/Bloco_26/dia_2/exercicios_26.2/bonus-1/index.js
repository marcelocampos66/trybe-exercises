const fs = require('fs').promises;
const perguntas = require('readline-sync');

async function readFile() {
  const fileName = perguntas.question('Digite o nome do arquivo que deseja ler: ');

  try {
    const content = await fs.readFile(fileName, 'utf8');
    console.log(content);
  } catch (error) {
    console.log('Arquivo inexistente');
  }

}

readFile();
