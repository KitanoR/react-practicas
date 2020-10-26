import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas de funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un objeto con un nombre', () => {
        const nombre = 'Cayetano';
        const usuarioActivo = getUsuarioActivo(nombre);
        expect(usuarioActivo).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
    
})