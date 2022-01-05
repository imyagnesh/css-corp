import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Weather';
import './root.css';
import { weatherServer } from './server';

weatherServer();

ReactDOM.render(<App />, document.getElementById('root'));
