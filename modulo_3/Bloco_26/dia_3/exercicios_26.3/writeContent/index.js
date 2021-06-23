const fs = require('fs').promises;

const writeContent = async (nomeArquivo, conteudo) => {
  await fs.writeFile(nomeArquivo, conteudo);
  return 'ok';
};

module.exports = writeContent;
