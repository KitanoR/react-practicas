import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../useEffect/effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Real example ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }
            <button
                onClick={() => setShow(!show)}
                className="btn btn-primary mt-5"
            >
                Show / hide
            </button>
        </div>
    )
}
