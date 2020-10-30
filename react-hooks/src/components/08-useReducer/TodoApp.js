import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Aprender react',
        done: false,
    }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        };
        dispatch(action);
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId,
        };
        dispatch(action);
    }

    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo,
        };
        dispatch(action);
    }

    
    return (
        <div>
            <h1>Todo App ({todos.length}):</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
