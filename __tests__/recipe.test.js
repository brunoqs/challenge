const request = require('supertest');
const app = require('../app');

describe("Recipe", () => {

    it("should get recipes by ingredients", async () => {
        const ingredients = ['tomato'];
        
        const res = await request(app).get(`/recipes?i=${ingredients.join(',')}`);

        expect(res.body.recipes[0]).toEqual(          
            expect.objectContaining({
                ingredients: expect.arrayContaining(ingredients)
            })          
        )
    }, 30000);
    
});