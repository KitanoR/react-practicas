import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    return (
        <div>
            <h1>Layout effect</h1>
            <hr />
            
            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag}
                    className="mb-0">{quote}</p>
            </blockquote>
            
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            
            <button 
                onClick={increment}
                className="btn btn-primary">
                Siguiente frase
            </button>
            
        </div>
    )
}
