const text = "hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];


test('Debe de contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('Temenos una banana?', () => {
    expect(fruits).toContain('banana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});
test('Verdadero', () => {
    expect(true).toBeTruthy();
});

// Prueba con callbacks
const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''));
}

test('Probando un callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});


//Purebas de promesas
const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject(Error('Debe exisitir una cadena'));
        }
        resolve(str.split('').reverse().join(''))
    });
}

test('Probar una promesa', () => {
    return reverseString2('hola')
    .then((str) => {
        expect(str).toBe('aloh');
    })
});

//Prueba con async y await
test('Probar async y await', async  () => {
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});


// afterEach(() => console.log('Despues de cada prueba'))
// afterAll(() =>  console.log('Despues de todas las pruebas'))

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
