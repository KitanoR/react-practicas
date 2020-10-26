
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Pruebas en el hook useFetchGifs',  () => {
    test('Debe ser el estado inicial de useFetchGifs', async () => {
        // const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch') );
        const { result } = renderHook(() => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        // await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);
    });

    test(' Debe retornar lista de imagenes y el loading en false', async () => {
        // sE ha comentado porque no se tiene el token
        // para la peticion
        // const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch') );
        // await waitForNextUpdate();

        // const { data, loading } = result.current;
        // expect(data.length).toBe(10);
        // expect(loading).toBe(true);
    })

})