import { renderHook, act } from "@testing-library/react-hooks";
import { useCouter } from '../../hooks/useCouter';

describe('Pruebas en useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCouter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe de verificar el valor pasado por parametro', () => {
        const { result } = renderHook(() =>  useCouter(100));
        expect(result.current.counter).toBe(100);
    })
    test('Debe de ingrementar en uno', () => {
        const { result } = renderHook(() =>  useCouter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(101)
    });
    test('Debe realizar un decremento de -1', () => {
        const { result } = renderHook(() => useCouter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(99)
    });
    test('Debe realizar un reset', () => {
        const { result } = renderHook(() => useCouter(100));
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(100)
    });
});