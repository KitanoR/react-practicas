
import { getImagen } from '../../base/11-async-await';
describe('11-async-await ', () => {
    test('Retornando la imagen ', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
});