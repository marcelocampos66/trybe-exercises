const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// helpers

const recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredientes:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredientes:['ovo']
  },
];

const deleteRecipe = (id) => {
  const result = recipes.find((recipe) => recipe.id === id);
  if (!result) return;
  const index = recipes.findIndex((item) => item.id === id);
  recipes.splice(index, 1);
  return result;
};

// 

// Rotas

app.delete('/recipe/:id', (req, res) => {
  const { params: { id } } = req;
  const deletedRecipe = deleteRecipe(parseInt(id));
  if (!deletedRecipe) {
    return res.status(404).json({ message: 'recipe not found'});
  }
  console.log(deletedRecipe);
  res.status(200).json(deletedRecipe);
});

// 

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: err.message });
}); //middleware error

app.listen(3000, () => { console.log('Rodando na porta 3000') });
