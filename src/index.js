import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

serviceWorker.register();

reportWebVitals();