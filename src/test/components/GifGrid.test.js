import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); 

describe('Pruebas en <GifGrid />', () => {
  const category = 'Goku'

  test('debe mostrar el componente correctamente ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow( <GifGrid category={category} /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes con nuestro useFetchGifs ', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/img.jpg',
      title: 'goku'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    
    const wrapper = shallow( <GifGrid category={category} /> );
    expect( wrapper ).toMatchSnapshot();
  });

})