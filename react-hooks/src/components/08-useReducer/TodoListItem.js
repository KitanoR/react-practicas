import React from 'react'

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p 
                onClick={() => handleToggle(todo.id)}
                className={`${ todo.done && 'completed' }`}
            >
                {index + 1} {todo.desc}
            </p>
            <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger">
                Borrar
            </button>
        </li>
    )
}
