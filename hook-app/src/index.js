import React from 'react';
import ReactDOM from 'react-dom';
import { MemoUseHook } from './components/06-memos/MemoHook';
import './index.css';
// import App from './App';
// import CounterApp from './components/useState/CounterApp';
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
import { CallbackHook } from './components/06-memos/CallbackHook';


ReactDOM.render(
    <CallbackHook />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
