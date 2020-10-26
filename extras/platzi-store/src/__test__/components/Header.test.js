import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

//Mount: cuando necesitas el DOM
//shallow: Solo necesitas algo particular del componente, no ocupas todo el dom

describe('<Header />', () => {
    test('Render del header del componente', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    
    test('Render del titulo', () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.first(".Header-title").text()).toEqual('Platzi Store');
    });
});

describe('Header snapshot', () => {
    test('Verificar la ui del componente de header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});

//Para re construir los snapshots se tiene que correr el siguiente comando
// jest --updateSnapshot


//Shallow permite traer elementos y probarlos como una unidad. 
//Es útil cuando solo necesito algo particular de ese componente y no necesito toda su estructura y elementos del DOM

// Probablemente muchos se hagan esta pregunta:
// ¿Cuándo utilizar mount y cuándo utilizar shallow?

// mount --> Cuando necesitas el DOM
// shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM