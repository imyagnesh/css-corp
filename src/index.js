import React from 'react';
import ReactDOM from 'react-dom';
// import AppHook from './AppHook';
import WeatherApp from './Components/weatherApp';
import { Weather } from './Components/weatherApp/context/weather';
import './root.css';

ReactDOM.render(<Weather><WeatherApp /></Weather>, document.getElementById('root'));
