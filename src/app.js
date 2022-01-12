import React from 'react';
import WeatherApp from './container/WeatherApp';
import { WeatherProvider } from './context/weatherContext';

const App = () => (
  <WeatherProvider>
    <WeatherApp />
  </WeatherProvider>
);

export default App;
