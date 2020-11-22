import React  from 'react';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { shallow } from 'enzyme';

describe('Pruebas en <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    )
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('No debe llamar el handleAddTodo', () => {
        const fromSubmit = wrapper.find('form').prop('onSubmit');
        fromSubmit( { preventDefault(){} } );
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })
    
    test('Debe de llamar la funcion de handle AddTodo', () => {
        const value = "Nuevo curso";
        const inputForm = wrapper.find('input')
        inputForm.simulate('change', { target: { value, name: 'description' }});
        const fromSubmit = wrapper.find('form').prop('onSubmit');
        fromSubmit( { preventDefault(){} } );
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // {}
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        }); // {}
        
        // verificar el calor resereado de formulario
       expect(wrapper.find('input').prop('value')).toBe('')
    });
})
