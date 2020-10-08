const recipeHelper = require('./helpers/recipe.helper');
const debug = require('debug')('app:recipe');

const recipesByIngredients = async (req, res, next) => {
    try {
        const ingredients = req.query.i.split(',').slice(0, 3).sort();
        const recipes = await recipeHelper.getRecipes(ingredients);
        res.json({
            keyword: ingredients,
            recipes
        })
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
};

module.exports = {
    recipesByIngredients
}