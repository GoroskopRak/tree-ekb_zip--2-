import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

import App from './Components/app';
import './Components/app/app.css';

ReactDOM.render((
    <HashRouter>
    <App />
    </HashRouter>
), document.getElementById('root')
);


