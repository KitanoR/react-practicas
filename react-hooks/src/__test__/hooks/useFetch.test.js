import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
    test('Debe de retornar la informacion por defecto', () => {
        const { result  } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'))
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBeTruthy();
        expect(error).toBe(null)
    });
    test('Debe de tener la info necesaria', async () => {
        const { result, waitForNextUpdate  } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'))
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data.data.length).toBe(6);
        expect(loading).toBeFalsy();
        expect(error).toBe(null);
    });
    test('Se debe de manejar el error', async () => {
        const { result, waitForNextUpdate  } = renderHook(() => useFetch('https://reqres.in/apig/busers?page=2'))
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBeFalsy();
        expect(error).toBe('No se pudo cargar la informacion');
    });
})
