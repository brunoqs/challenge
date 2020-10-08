const axios = require('axios');
const debug = require('debug')('app:recipe');
require('dotenv').config();

const getGif = (title) => {
    return new Promise((resolve, reject) => {
        const url = `${process.env.GIPHY_URL}/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&limit=1&q=${title}`
        axios.get(url).then(res => {
            resolve(res.data.data[0].embed_url);
        }).catch(err => {
            reject(err);
        });
    });
};

const getRecipes = async (ingredients) => {
    const ing = ingredients.join(',');
    const url = `${process.env.RECIPES_URL}/api/?i=${ing}`;
    try {
        const res = await axios.get(url);    
        const { data } = res;
        const recipes = [];
        for (item of data.results) {
            const gif = await getGif(item.title);
            const recipe = {
                title: item.title,
                ingredients: item.ingredients.split(', ').sort(),
                link: item.href,
                gif
            };
            recipes.push(recipe);
        }
        return recipes;
    } catch (err) {
        if (err.response && err.response.status !== 200) {
            debug(`Serviço http://www.recipepuppy.com ou http://api.giphy.com podem estar indisponíveis: ${err.response.data.message}`);
            throw 'Serviço indisponível';
        }
    }
};

module.exports = {
    getRecipes,
    getGif
}
