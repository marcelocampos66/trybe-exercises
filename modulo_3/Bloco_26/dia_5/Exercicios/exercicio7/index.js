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
  }
];

const updateRecipe = (id, name, ingredientes) => {
  const result = recipes.find((recipe) => recipe.id === id);
  if (!result || !Array.isArray(ingredientes)) return;
  const newRecipe = { id, name, ingredientes };
  const index = recipes.findIndex((item) => item.id === id);
  recipes.splice(index, 1);
  recipes.push(newRecipe);
  return newRecipe;
};

// 

// Rotas

app.put('/recipe/:id', (req, res) => {
  const { params: { id } } = req;
  const { body: { name, ingredientes } } = req;
  const updatedRecipe = updateRecipe(parseInt(id), name, ingredientes);
  if (!updatedRecipe) return res.status(404).json({ message: 'recipe not found'});
  res.status(200).json(updatedRecipe);
});

// 

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message});
}); //middleware error

app.listen(3000, () => { console.log('Rodando na porta 3000') });
