import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 1, name: 'cayetano', age: 23 })}
            >
                Login
            </button>
        </div>
    )
}
