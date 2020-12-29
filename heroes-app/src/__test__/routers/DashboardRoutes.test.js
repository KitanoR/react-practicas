
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas de <DashboardRoutes />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'CAyetano',
            logged: true,
        }
    }
    test('should be show conrect', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toEqual('CAyetano')
    })
    
})
