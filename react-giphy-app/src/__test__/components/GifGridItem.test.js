import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas <GifGridItem/>',() => {
    const titulo = 'titulo';
    const url = 'https://algo.com/algo.png'
    let wrapper = shallow(
        <GifGridItem title={titulo} url={url} />
    );

    beforeEach(() => {
        wrapper = shallow(
            <GifGridItem title={titulo} url={url} />
        )
    });
    test('Debe mostrar <GifGridItem />', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    });

    test('Debe de tener la imagen igual a la ur y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);
    });

    test('Debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const clase = div.props().className;
        const contiene_animate = clase.includes('animate__fadeIn');
        expect(contiene_animate).toBe(true);
    });


})