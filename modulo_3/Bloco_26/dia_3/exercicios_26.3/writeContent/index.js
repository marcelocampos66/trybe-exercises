// const fs = require('fs').promises;
const fs = require('fs');

// const writeContent = async (nomeArquivo, conteudo) => {
//   await fs.writeFile(nomeArquivo, conteudo);
//   return 'ok';
// };

const writeContent = (nomeArquivo, conteudo) => {
  fs.writeFileSync(nomeArquivo, conteudo);
  return 'ok';
};

module.exports = writeContent;
