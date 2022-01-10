import React, { useCallback, useMemo, useReducer } from 'react';
import Input from '../../components/Input';
import OptionChips from '../../components/OptionChips';
import Select from '../../components/Select';
import {
  weatherAppInitialState,
  weatherReducer,
} from '../../reducers/weatherReducer';
import SelectedCity from './SelectedCity';

const WeatherApp = () => {
  const [state, dispatch] = useReducer(weatherReducer, weatherAppInitialState);
  console.log(state);
  const { location, cities, selectedCity, unit } = state;

  const loadCities = async (city) => {
    try {
      const res = await fetch(
        `https://api.weatherserver.com/weather/cities/${city}`,
      );
      const json = await res.json();
      dispatch({ type: 'LOAD_CITIES_SUCCESS', payload: json.results });
    } catch (error) {}
  };

  const onChangeLocation = useCallback((event) => {
    const city = event.target.value;
    dispatch({ type: 'CHANGE_LOCATION', payload: city });
    loadCities(city);
  }, []);

  const onSelectCity = useCallback(
    async (cityId) => {
      try {
        console.log(unit);
        const res = await fetch(
          `https://api.weatherserver.com/weather/current/${cityId}/${unit}`,
        );
        const json = await res.json();

        dispatch({ type: 'LOAD_SELECTED_CITY_SUCCESS', payload: json });
      } catch (error) {}
    },
    [unit],
  );

  const units = useMemo(
    () => [
      {
        value: 'C',
        text: 'Celsius',
      },
      {
        value: 'F',
        text: 'Fahrenheit',
      },
    ],
    [],
  );

  const onChangeUnits = useCallback((event) => {
    dispatch({ type: 'CHANGE_UNIT', payload: event.target.value });
  }, []);

  console.log('Wether render');

  return (
    <div className="weather-app">
      <h1>WeatherWatch</h1>
      <div>
        <Input
          id="weather-text"
          label="Location"
          value={location}
          onChange={onChangeLocation}
        />
        {cities.length > 0 && (
          <OptionChips cities={cities} onSelectCity={onSelectCity} />
        )}
        <Select
          id="weather-select"
          label="Units"
          value={unit}
          options={units}
          onChange={onChangeUnits}
        />
      </div>
      {selectedCity && <SelectedCity data={selectedCity} />}
    </div>
  );
};

export default WeatherApp;
