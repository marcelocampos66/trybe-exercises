const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

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

const verifyId = (req, res, next) => {
  const { params: { id } } = req;
  const idExists = recipes.some((recipe) => recipe.id === parseInt(id));
  if (!idExists) {
    return res.status(401).json({ message: 'recipe not found'});
  }
  next();
};

const updateIngredients = (id, { remove, insert }) => {
  if (remove) {
    const chosenRecipe = recipes.find((recipe) => recipe.id === parseInt(id));
    const { ingredientes } = chosenRecipe;
    const newArray = ingredientes
      .filter((ingredient) => !remove.includes(ingredient));
    chosenRecipe.ingredientes = newArray;
  }
  if (insert) {
    const chosenRecipe = recipes.find((recipe) => recipe.id === parseInt(id));
    const { ingredientes } = chosenRecipe;
    const newArray = [...ingredientes, ...insert];
    chosenRecipe.ingredientes = newArray;
  }
  console.log(recipes);
};

// 

// Rotas

app.put('/recipe/:id/ingredients', [
  verifyId,
  (req, res) => {
    const { params: { id } } = req;
    const { body } = req;
    updateIngredients(id, body);
    res.status(200).end();
  },
]);

// 

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
}); //middleware error

app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}`) });
