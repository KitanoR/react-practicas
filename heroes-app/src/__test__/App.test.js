import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Test para el inicial', () => {
    test('Validando montar el test ', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toMatchSnapshot();
    });
});