import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherUnits = ({ toggleUnits }) => (
  <div className="px-5 py-5 bg-white flex-grow order-2">
    <h1 className="p-1 uppercase font-medium ">units</h1>
    <select onChange={(event) => toggleUnits(event)} className="form-select">
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
    </select>
  </div>
);
WeatherUnits.prototypes = {
  toggleUnits: PropTypes.string.isRequired,
};
WeatherUnits.defaultProps = {
  defaultTempUnit: 'Celsius',
};
export default memo(WeatherUnits);
