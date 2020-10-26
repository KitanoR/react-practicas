import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en template string.js', () => {
    test('getSaludo debe retornar un saludo', () => {
        const nombre = 'Cayetano';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);
    })

    test('prueba con valor de default ', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Cori')
    })
})