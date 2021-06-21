const fs = require('fs').promises;
const perguntas = require('readline-sync');

async function readAndWrite() {
  const fileName = perguntas.question('Digite o nome do arquivo que deseja ler: ');
  
  const content = await fs.readFile(fileName, 'utf8').catch((err) => {
    console.log(err.message);
    return;
  });

  console.log(content);

  const oldWord = perguntas.question('Digite uma palavra do conteudo para ser substituida por uma nova palavra ');

  console.log(oldWord);

  const newWord = perguntas.question('Digite uma nova palavra pra substituir a antiga ');

  console.log(newWord);

  const newContent = content.replace(new RegExp(oldWord, 'g'), newWord);

  console.log(newContent);

  await fs.writeFile('novoConteudo.txt', newContent);
  
}

readAndWrite();
