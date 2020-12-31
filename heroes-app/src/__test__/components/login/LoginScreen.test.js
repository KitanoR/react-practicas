import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
    const historyMock = {
        length: 10, 
        goBack: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
    };
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    );
    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de realizar el dispatch y la navegacion', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'cayetano'
            }
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect(historyMock.replace).toHaveBeenCalledWith('/dc');

    })
    
})
