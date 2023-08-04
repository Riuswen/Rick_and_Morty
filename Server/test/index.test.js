const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades : "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            const props = ["id", "name", "species", "gender", "status", "origin", "image"];
            props.forEach((prop) => {
                expect(response.body).toHaveProperty(prop);
            });
        });

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/9999').expect(500);
        });
    });

    describe('GET /rickandmorty/login', () => {
        it('Si la informacion de login es correcta', async () => {
            const access = { access: true };
            const response = await agent.get('/rickandmorty/login?email=wrius@mail.com&password=pass123');
            expect(response.body).toEqual(access);
        });

        it('La informacion de login es incorrecta', async () => {
            const access = { access: false };
            const response = await agent.get('/rickandmorty/login?email=wr@mail.com&password=1234');
            expect(response.body).toEqual(access);
        });
    });

    describe('POST /rickandmorty/fav', () => {
        it('Debería devolver lo que se envía en el body en un arreglo', async () => {
            const favorite = { characterId: 1, characterName: 'Rick' };
            const response = await agent.post('/rickandmorty/fav').send(favorite);
            expect(response.body).toEqual([favorite]);
        });

        it('Debería agregar un nuevo elemento al arreglo', async () => {
            const favorite1 = { characterId: 1, characterName: 'Rick' };
            const favorite2 = { characterId: 2, characterName: 'Morty' };

            await agent.post('/rickandmorty/fav').send(favorite1);
            const response = await agent.post('/rickandmorty/fav').send(favorite2);
            expect(response.body).toContainEqual(favorite1);
            expect(response.body).toContainEqual(favorite2);
        });
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Debería mantener elementos previos si el ID no existe', async () => {
            const response = await agent.delete('/rickandmorty/fav/9999');
            expect(response.body).toEqual([]);
        });

        it('Debería eliminar correctamente al personaje si el ID existe', async () => {
            const favorite = { characterId: 1, characterName: 'Rick' };
            const postResponse = await agent.post('/rickandmorty/fav').send(favorite);
            const characterId = postResponse.body[0].characterId;
            const deleteResponse = await agent.delete(`/rickandmorty/fav/${characterId}`);
            expect(deleteResponse.body).toEqual([]);
        });
    });
});
