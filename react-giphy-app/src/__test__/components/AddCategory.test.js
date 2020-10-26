import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas <AddCategory/>',() => {
    const setCategories = jest.fn(); // funcion 
    let wrapper = shallow(
        <AddCategory setCategories={setCategories}/>
    );
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(
            <AddCategory setCategories={setCategories}/>
        );
    })
    test('Debe mostrar <AddCategory />', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: { value: value }});
    });

    test('No debe de postear la informaci[on del submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled()
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        // 1 simylar el input change
        const value = 'Hola miau';
        input.simulate('change', { target: { value } });
        // 2 simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3 set categories debe ser llamada
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); //las veces que se repite
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // 4 elvalor del input debe ser ''
        const nuevo_input = wrapper.find('input');
        expect(nuevo_input.prop('value')).toBe('');
    });
})