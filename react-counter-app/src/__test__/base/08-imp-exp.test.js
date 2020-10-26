
import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
describe('Buscador de heroes', () => {
    test('debe de retornar un heroe por id', () => {
        const idHeroe = 2;
        const heroe = getHeroeById(idHeroe);

        const heroeTest = heroes.find( x => x.id === idHeroe);

        expect(heroe).toEqual(heroeTest);
    })

    test('Get HeroByID debe retornar undefined', () => {
        const heroe = getHeroeById(100);
        expect(heroe).toBe(undefined)
    });

    test('Retornar heroes por owner', () => {
        const owner = 'DC';
        const heroesRespuesta = getHeroesByOwner(owner);

        const heroesTest = heroes.filter( x => x.owner === owner);

        expect(heroesRespuesta).toEqual(heroesTest);
    })

    test('Retornar heroes solo por marvel retorna 2', () => {
        const owner = 'Marvel';
        const heroesRespuesta = getHeroesByOwner(owner);


        expect(heroesRespuesta.length).toBe(2);
    })
    
});