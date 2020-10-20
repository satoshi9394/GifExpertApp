import  getGifs from '../../helpers/getGifs';


describe('Pruebas con getGifs fetch', () => {

  test('debe traer 10 elementos', async() => {
    const gifs = await getGifs('One Push');
    expect( gifs.length ).toBe( 10 );
  });
  test('debe traer 0 elementos ', async() => {
    const gifs = await getGifs('');
    expect( gifs.length ).toBe( 0 );
  });
  
})