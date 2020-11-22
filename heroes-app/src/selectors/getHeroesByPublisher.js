import { heroes } from '../data/heroes';


export const getHeroesByPublisher = (publisher) => {
    const validePublisher = ['Marvel Comics', 'DC Comics'];
    if (!validePublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }
    return heroes.filter(heroe => heroe.publisher === publisher);
}