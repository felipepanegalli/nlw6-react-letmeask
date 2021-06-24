import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase'
import './styles/global.scss'
import './styles/light-mode.scss'
// import './styles/dark-mode.scss'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);