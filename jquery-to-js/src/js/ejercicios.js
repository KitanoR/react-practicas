const multiply = (a, b) => {
    let resultado = 0;
    const positivo = Math.abs(b) == b;
    for(let val; val < Math.abs(b); val++) {
        resultado = positivo ? resultado + a : resultado - a;
    }
    return resultado;
}

const a = multiply(10,50)
console.log(a)

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el);
const b = getBiggest([50, -1555, 10000, 0, 1,43])
console.log(b)

const clean = (arr) => arr.reduce((acc, el) => {
    if(el) {
       acc.push(el);
    }
    return acc;
}, []);

const c = clean([1, undefined, false, 0, ,3, 4, 2])
console.log(c)

const arr = [[1, 2], [[3, 4]], [1, []]]
// [1, 2, [4,5], 1, []]

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr);

// ejercicio 
const repeated = str => {
    const lowered = str.toLowerCase();
    const splitted = str.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if(acc[el]) {
            acc[el]++;
        } else {
            acc[el] = 1
        }
        return acc;
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated('this. is a reapted word test this is a a')
console.log('e ', e)


/// palidromo
const isPalindromo = str => {
    str = str.replace(/\s/g, '');
    const lowered = str.toLowerCase();
    const splitted = lowered.split('')
    const reversed = splitted.reverse();
    const joined = reversed.join('')

    return lowered === joined
}

const f = isPalindromo('palabras son palindromos')
console.log(f)


