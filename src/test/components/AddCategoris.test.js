import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = () => {};
  const wrapper = shallow( <AddCategory setCategories={setCategories}/> );
  test('debe mostrar el componente correctamente ', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('debe de cambiar la caja de test ', () => {
    const input =  wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', { target: { value } });
  })
  

})