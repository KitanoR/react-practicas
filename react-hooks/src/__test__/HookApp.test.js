import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { HookApp } from '../HookApp';

describe('Tests para el comonente de hook app', () => {
    test('Debe mostrar <Hookapp />', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe contener hola mundo', () => {
        const wrapper = shallow(<HookApp />);
        const h1 = wrapper.find('h1');
        expect(h1.text().trim()).toBe('Hola Mundo')
    });
});