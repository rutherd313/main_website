import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';

// Bootstrap 
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

import 'babel-polyfill';

import App from './App.jsx';

const app = (
    <HashRouter>
        <App />
    </HashRouter>
)

ReactDOM.render(
    app, document.getElementById("index")
);

