import React  from 'react';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
describe('Tests para el componente <TodoListItem />', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={1}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )
    test('debe de mostrarse correctamente', () => {
        // hacerlo con el snapshot
        expect(wrapper).toMatchSnapshot();

    });
    test('debe de llamar la funcion de handleDelete', () => {
        // llamar la funcion borrar
        const boton = wrapper.find('button');
        boton.simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    });
    test('debe de llamar la funcion handleToggle', () => {
        // llamar la funcion toogle
        const parrafo = wrapper.find('p');
        parrafo.simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    });
    test('Debe de mostrar el texto correctamente', () => {
        // llamar la funcion toogle
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(`${1 + 1} ${demoTodos[0].desc}`.trim())
    });
    test('Debe de tener la clase complete si el todo.done', () => {
        // llamar la funcion toogle
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={1}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            />
        )
        const parrafo = wrapper.find('p');
        expect(parrafo.hasClass('completed')).toBeTruthy();
    });
})
