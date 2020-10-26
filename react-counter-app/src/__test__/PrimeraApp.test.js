import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe de mostrar el mensaje de Hola, Soy Goku', () => {
    //     const saludo = 'Hola soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe mostarr <PrimerApp /> corretamente', () => {
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(
            <PrimeraApp saludo={saludo} />
        );

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                subtitulo={subtitulo}
                saludo={saludo} />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
});