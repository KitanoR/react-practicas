import React from 'react';

import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {


    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        paswsword: '',
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form values ', formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    name="paswsword"
                    className="form-control"
                    placeholder="******"
                    value={ password  }
                    onChange={ handleInputChange }
                />
            </div>
            <button className="btn btn-primary">
                Enviar
            </button>

        </form>
    )
}