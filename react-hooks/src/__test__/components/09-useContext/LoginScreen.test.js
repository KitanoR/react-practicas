import React  from 'react';

import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { mount } from 'enzyme';


describe('Pruebas de <LoginScreen />', () => {
    const user = {
        name: 'caye',
        email: 'caye@yaho.com'
    }
    const setUser = jest.fn();
    // Mount se utilia para renderizar todo en general
    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )
    test('should debe mostrarse ocrrectamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe ejecutar el set user con el argumento esperado', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({ id: 1, name: 'cayetano', age: 23 })
    });
    
})
