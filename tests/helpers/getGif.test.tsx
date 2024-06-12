import { getGift } from "../../src/api/getGif";

describe('getGif prueba de API', () => {


    test('debe retornar un arreglo de 10 elementos', async() => {
        const gifs = await getGift('One Punch');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({ 
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });  
        })
});