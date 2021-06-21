const fs = require('fs').promises;

async function exercicio5 () {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFiles = strings
    .map((string, index) =>  fs.writeFile(`./file${index + 1}.txt`, string));

  await Promise.all(createFiles);

  const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

  const toRead =  await Promise.all(
    files.map((file) => fs.readFile(file, 'utf-8'))
  );

  const newString = toRead.join(' ');

  console.log(newString);

  await fs.writeFile('fileAll.txt', newString);
}

exercicio5();
