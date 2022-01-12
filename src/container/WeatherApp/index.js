import React, { useContext } from 'react';

import Input from '../../components/Input';
import OptionChips from '../../components/OptionChips';
import Select from '../../components/Select';
import { WeatherContext } from '../../context/weatherContext';

import SelectedCity from './SelectedCity';

const WeatherApp = () => {
  const { onChangeLocation, onSelectCity, onChangeUnits, units, data } =
    useContext(WeatherContext);

  const { location, loading, unit, error, selectedCity, cities } = data;

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
        {location.length > 0 && (
          <div className="search-results">
            {loading ? (
              <p>Loading...</p>
            ) : cities.length > 0 ? (
              <OptionChips cities={cities} onSelectCity={onSelectCity} />
            ) : (
              <p>City Not Found</p>
            )}
          </div>
        )}
        <Select
          id="weather-select"
          label="Units"
          value={unit}
          options={units}
          onChange={onChangeUnits}
        />
      </div>
      {error && <div className="error-panel" />}
      {loading ? (
        <div className="is-loading" />
      ) : (
        selectedCity && <SelectedCity data={selectedCity} />
      )}
    </div>
  );
};

export default WeatherApp;
