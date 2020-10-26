import React from  'react';
import  CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas sobre <CounterApp/>', () => {
    let wrapper = shallow(
        <CounterApp />
    );

    beforeEach(() => {
        wrapper = shallow(
            <CounterApp />
        );
    });

    test('Debe mostar <CounterApp />', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostarr por defecto 100', () => {
        const value = 100;
        const wrapper = shallow(
            <CounterApp 
                value={value}
            />
        );
        const valorCounter = wrapper.find('h2').text().trim();
        expect(valorCounter).toBe('100');
    });

    test('Debe de incrementar con el boton de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11')
    });

    test('Debe decrementar con el boton de +1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9')
    });

    test('debe de colocar el valor por defecto con el boton btn reset', () => {
        const value = 105;
        const wrapper = shallow(
            <CounterApp 
                value={value}
            />
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });
})
