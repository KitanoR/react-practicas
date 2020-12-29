
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';
describe('Pruebas en <PrivareRoute />', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    Storage.prototype.setItem = jest.fn();
    test('should debe de mostrar el componente si est[a autenticado y guardar el local storage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated
                    component={() => <span>listo</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        expect(wrapper.find('span').exists()).toBeTruthy();        
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    })

    test('Debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={false}
                    component={() => <span>listo</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBeFalsy();
        expect(wrapper.find('Redirect').exists()).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

    })
    
})
