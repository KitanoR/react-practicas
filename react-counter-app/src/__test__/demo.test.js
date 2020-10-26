
describe('Pruebas en el archivo demo.js', () => {
    test('Deben ser iguales los strings', () => {
        // 1. inicializacion
        const mensaje = 'Hola mundo';
    
        //2. estimulo 
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
})

