import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm';

describe('Pruebas del hook useForm', () => {
    const initialForm = {
        name: 'Cayetano',
        email: 'caye@caye.com'
    }

    test('should be return the form with default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [  values, handleInputChange, reset ] = result.current;
        expect(values).toBe(initialForm);
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    });
    test('Debe de cambiar el valor del formulario (name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [  _, handleInputChange ] = result.current;
        act(() => {
            handleInputChange({
                target: { 
                    name: 'name',
                    value: 'Corina'
                 }
            });
        })
        const [  values ] = result.current;
        const valorEsperado = { ...initialForm, name: 'Corina'};
        expect(values).toEqual(
            expect.objectContaining(valorEsperado)
        )
    });
    test('Debe de reestablecer con el RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [  _, handleInputChange, reset ] = result.current;
        act(() => {
            handleInputChange({
                target: { 
                    name: 'name',
                    value: 'Corina'
                 }
            });
            reset();
        });
        const [values] = result.current;
        expect(values).toBe(initialForm)
    });
    
});