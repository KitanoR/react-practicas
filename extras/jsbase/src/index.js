const cities = ['Xela', 'Toto', 'Guate', 'San Marcos', 'Lima', 'Guadalajara'];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
}

const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject(Error('Debe exisitir una cadena'));
        }
        resolve(str.split('').reverse().join(''))
    });
}

module.exports = randomString;