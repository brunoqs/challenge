const express = require('express');

const routes = express.Router();

const { recipesByIngredients } = require('./controllers/recipe.controller');

routes.get('/recipes', recipesByIngredients);

module.exports = routes;