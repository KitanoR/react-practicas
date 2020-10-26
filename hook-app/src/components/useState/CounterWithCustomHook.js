import React from 'react'
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export default function CounterWithCustomHook() {
    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <>
            <h1>Counter with hook {counter}</h1>
            <hr/>

            <button onClick={increment} className="btn">+1</button>
            <button onClick={reset} className="btn">reset</button>
            <button onClick={decrement} className="btn">-1</button>
        </>
    )
}
