import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en el componente <SearchScreen />', () => {
    const historyMock = {
        length: 10, 
        goBack: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
    };
    test('should mostrarse con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={() => <SearchScreen history={historyMock} />} />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    });

    test('should mostrar a batman y el input con el valor del query string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={() => <SearchScreen history={historyMock} />} />
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });
    test('should debe de mostrar un error si no se encuentra un hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmansdfsdfsdf']}>
                <Route path="/search" component={() => <SearchScreen history={historyMock} />} />
            </MemoryRouter>
        );
        expect(wrapper.find('.alert-danger').exists()).toBeTruthy();
        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a hero with batmansdfsdfsdf');

    });

    test('should llamar el push del history', () => {
        const history = {
            push: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmansdfsdfsdf']}>
                <Route path="/search" component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(history.push).toHaveBeenCalledWith('?q=batman');
    })
    
    
    
})
