
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';
describe('09-promesas ', () => {
    test('Debe retornar un heroe existente', (done) => {
        const idHeroe = 1;
        getHeroeByIdAsync(idHeroe)
            .then((hero) => {
                expect(hero).toEqual(heroes[0]);
                done();
            });
    });

    test('No se encuentra un heroe', (done) => {
        getHeroeByIdAsync(100)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    });
});