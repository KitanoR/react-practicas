import React from 'react'

export const LoginScreen = ({ history }) => {
    const handleLogin = () => {
        history.replace('/marvel');
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
