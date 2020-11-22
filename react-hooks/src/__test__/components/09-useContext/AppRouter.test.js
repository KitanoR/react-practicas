import React  from 'react';

import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

import { mount } from 'enzyme';

describe('Pruebas en <AppRouter />', () => {
    const user = {
        name: 'caye',
        email: 'caye@yaho.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
