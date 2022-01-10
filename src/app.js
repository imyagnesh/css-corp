import React, { useReducer } from 'react';
import {
  weatherAppInitialState,
  weatherReducer,
} from './reducers/weatherReducer';

const App = () => {
  const [state, dispatch] = useReducer(weatherReducer, weatherAppInitialState);
  const { location, cities, selectedCity } = state;

  const loadCities = async (city) => {
    try {
      const res = await fetch(
        `https://api.weatherserver.com/weather/cities/${city}`,
      );
      const json = await res.json();
      dispatch({ type: 'LOAD_CITIES_SUCCESS', payload: json.results });
    } catch (error) {}
  };

  const onChangeLocation = (event) => {
    const city = event.target.value;
    dispatch({ type: 'CHANGE_LOCATION', payload: city });
    loadCities(city);
  };

  const onSelectCity = async (cityId) => {
    try {
      const res = await fetch(
        `https://api.weatherserver.com/weather/current/${cityId}/C`,
      );
      const json = await res.json();
      dispatch({ type: 'LOAD_SELECTED_CITY_SUCCESS', payload: json.results });
    } catch (error) {}
  };

  return (
    <div className="weather-app">
      <h1>WeatherWatch</h1>
      <div>
        <div className="input-box">
          <label htmlFor="weather-textbox" className="label">
            Location
          </label>
          <input
            type="text"
            className="input-box"
            id="weather-textbox"
            value={location}
            onChange={onChangeLocation}
          />
        </div>
        {cities.length > 0 && (
          <div className="search-results">
            {cities.map((x) => (
              <div
                role="button"
                className="search-option"
                key={x.id}
                onClick={() => onSelectCity(x.id)}
              >
                {x.name}
              </div>
            ))}
          </div>
        )}
        <div className="set-units">
          <label htmlFor="weather-unit" className="label">
            Location
          </label>
          <select id="weather-unit">
            <option value="">Please Select Unit</option>
          </select>
        </div>
      </div>
      <div className="weather-report">
        <p className="big">Bengaluru</p>
        <p className="conditions">SCATTERED CLOUDS | Feels Like 30 C</p>

        <img src="" alt="image" />

        <div className="temperature">
          <h2>Current Temperature</h2>
          <div></div>
        </div>
        <div className="wind">
          <h2>Current Temperature</h2>
          <div></div>
        </div>
        <div className="pressure">
          <h2>Current Temperature</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
