import getData from '../../utils/getData';

describe('Fetch api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    });

    test('Llamar una api y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '1233'}));

        getData('https://google.com')
            .then((response) => {
                expect(response.data).toEqual('1233');
                done();
            });
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
    });
});