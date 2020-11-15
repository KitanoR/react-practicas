import React  from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import '@testing-library/jest-dom';


describe('Pruebas para el componente <RealExampleRef />', () => {
    const wrapper = shallow(<RealExampleRef />);
    test('Comprobando que se muestra', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    test('Debe mostrar el comonente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});