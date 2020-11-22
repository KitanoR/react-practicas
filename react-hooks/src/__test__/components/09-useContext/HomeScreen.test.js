import React  from 'react';

import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { mount } from 'enzyme';


describe('Pruebas de home screen', () => {
    const user = {
        name: 'caye',
        email: 'caye@yaho.com'
    }
    // Mount se utilia para renderizar todo en general
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )
    test('should debe mostrarse ocrrectamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
