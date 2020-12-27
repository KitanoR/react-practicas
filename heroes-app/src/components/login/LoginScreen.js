import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);
    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/marvel';
        dispatch({
            payload: { name: 'cayetano' },
            type: types.login
        })
        history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>Login screen</h1>
            <hr />
            <p>
                Ingresa 
            </p>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
