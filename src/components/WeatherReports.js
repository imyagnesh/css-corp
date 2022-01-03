import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReports = forwardRef(
  ({
    city,
    description,
    units,
    currentTemp,
    maxTemp,
    minTemp,
    windSpeed,
    windDct,
    pressure,
    humidity,
  }) => (
    <div className="bg-white p-1 w-11/12">
      <div className="grid grid-cols-3">
        <div className="my-3 p-2 col-span-2">
          <h3 className="text-2xl font-bold tracking-wide">{city}</h3>
          <div className="uppercase text-slate-500 font-bold text-xs">
            {description}
          </div>
        </div>
      </div>
      <div className="flex ml-8">
        <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
          <div className="text-white uppercase">current temperature</div>
          <span className="text-white">
            {currentTemp}
            &deg;
            {units}
          </span>
        </div>
        <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
          <div className="text-white uppercase">Maximum temperature</div>
          <span className="text-white">
            {maxTemp}
            &deg;
            {units}
          </span>
        </div>
        <div className="bg-gradient-to-b from-purple-500 to-orange-500 h-20 w-1/3 text-center rounded-md ml-2">
          <div className="text-white uppercase">minimum temperature</div>
          <span className="text-white">
            {minTemp}
            &deg;
            {units}
          </span>
        </div>
      </div>
      <div className="flex pt-5 ml-8">
        <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-20 w-1/2 text-center rounded-md ml-2">
          <div className="text-white uppercase">wind speed</div>
          <span className="text-white">{windSpeed}</span>
        </div>
        <div className="bg-gradient-to-r from-pink-700 to-pink-500 h-20 w-1/2 text-center rounded-md ml-2">
          <div className="text-white uppercase">wind direction</div>
          <span className="text-white">{windDct} degrees</span>
        </div>
      </div>
      <div className="flex pt-5 pb-5 ml-8">
        <div className="bg-gradient-to-r from-blue-300 to-blue-700 h-20 w-1/2 text-center rounded-md ml-2">
          <div className="text-white uppercase">pressure</div>
          <span className="text-white">{pressure} hPa</span>
        </div>
        <div className="bg-gradient-to-r from-blue-300 to-blue-700 h-20 w-1/2 text-center rounded-md ml-2">
          <div className="text-white uppercase">humidity</div>
          <span className="text-white">{humidity} %</span>
        </div>
      </div>
    </div>
  ),
);

export default memo(WeatherReports);
