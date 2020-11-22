import React  from 'react';

import { TodoList } from '../../../components/08-useReducer/TodoList';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('should be mostrarse corretamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should be tener dos <TodoList>tems /<', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
    })
})
