import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={setCategories}/> );
  });

  test('debe mostrar el componente correctamente ', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('debe de cambiar la caja de test ', () => {
    const input =  wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', { target: { value } });
  })

  test('No debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    
    expect( setCategories ).not.toHaveBeenCalled();
  })
  
  test('deben de llamar el setCategoris y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', { target: { value } });
    const formSubmit = wrapper.find('form');
    formSubmit.simulate('submit', { preventDefault(){} })
    expect( setCategories ).toHaveBeenCalled();
    // que se llame como una funcion
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    expect( input.prop('value') ).toBe('');
  })
  
  

})