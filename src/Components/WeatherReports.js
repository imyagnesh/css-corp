import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReports = forwardRef((props, ref) => (
  <div className="mt-2 mx-2 bg-white rounded">
    <div className="grid grid-cols-3 mx-2">
      <div className="my-3 p-2 col-span-2">
        <h3 className="text-2xl font-bold tracking-wide">{props.city}</h3>
        <div className="uppercase text-slate-500 font-bold text-xs">
          {props.description} <span>| feels like</span> {props.feelsLike}
          &deg;
          {props.units}
        </div>
      </div>
    </div>
    <div className="flex mx-2">
      <div className="temperature-section">
        <div className="text-field">current temperature</div>
        <span className="text-white">
          {props.currentTemp}
          &deg;
          {props.units}
        </span>
      </div>
      <div className="temperature-section">
        <div className="text-field">Maximum temperature</div>
        <span className="text-white">
          {props.maxTemp}
          &deg;
          {props.units}
        </span>
      </div>
      <div className="temperature-section">
        <div className="text-field">minimum temperature</div>
        <span className="text-white">
          {props.minTemp}
          &deg;
          {props.units}
        </span>
      </div>
    </div>
    <div className="flex pt-5 mx-2">
      <div className="wind-section">
        <div className="text-field">wind speed</div>
        <span className="text-white">{props.windSpeed} meter/sec</span>
      </div>
      <div className="wind-section">
        <div className="text-field">wind direction</div>
        <span className="text-white">{props.windDct} degrees</span>
      </div>
    </div>
    <div className="flex pt-5 pb-5 mx-2">
      <div className="air-section">
        <div className="pressure">pressure</div>
        <span className="text-white">{props.pressure} hPa</span>
      </div>
      <div className="air-section">
        <div className="pressure">humidity</div>
        <span className="text-white">{props.humidity} %</span>
      </div>
    </div>
  </div>
));

WeatherReports.propTypes = {
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

export default memo(WeatherReports);
