
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas del todo reducer', () => {
    test('Debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });
    test('Debe de agregar un Todo', () => {
        const action = {
            type: 'add',
            payload: {
                id:3,
                desc: 'Apender python',
                done: false
            }
        }
        const estadoEsperado = [...demoTodos, action.payload];
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual(estadoEsperado);
    })
    
    test('Debe de borrar un TODO', () => {
        const idTodo = 1;
        const estadoEsperado = demoTodos.filter(x => x.id !== idTodo );
        const action = {
            type: 'delete',
            payload: idTodo
        }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual(estadoEsperado);
    });

    test('Debe de hacer el TOGGLE del TODO', () => {
        const idTodo = 1;
        const estadoEsperado = demoTodos.map(todo => (todo.id === idTodo) ? {...todo, done: !todo.done}: todo);
        const action = {
            type: 'toggle',
            payload: idTodo,
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(2);
        expect(state).toEqual(estadoEsperado);
    });
})
