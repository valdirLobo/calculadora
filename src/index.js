import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <h1>Calculador</h1>
        <Calculator />
    </div>
, document.getElementById('root'));
serviceWorker.unregister();
