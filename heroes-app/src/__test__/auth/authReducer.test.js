
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

const initialState = {
    logged: true
};
describe('Prueba auth reducer', () => {
    test('should de retornar el estado por defecto', () => {
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe de autenticar y colocarl el name del estado', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'cayetano'
            }
        }
        const state = authReducer(initialState, action);
        expect(state.name).toEqual('cayetano');
        expect(state.logged).toBeTruthy();
    })
    test('Debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        };
        const state = authReducer(initialState, action);
        expect(state.logged).toBeFalsy();
    })
})
