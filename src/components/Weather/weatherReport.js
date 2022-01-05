/* eslint-disable react/jsx-no-useless-fragment */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReport = ({ weatherReport, defaultTempUnit }) => {
  const {
    temp,
    temp_min,
    temp_max,
    feels_like,
    pressure,
    humidity,
    icon,
    location,
    wind_direction,
    wind_speed,
  } = weatherReport;

  return (
    <>
      {weatherReport ? (
        <>
          <div className="flex text-left bg-white mt-5">
            <div className="order-1 flex-grow">
              <h1 className="font-bold text-xl leading-10">{location}</h1>
              <div className="font-normal text-slate-400">
                SCATTERED CLOUDS | FEEL LIKE {feels_like} {defaultTempUnit}{' '}
              </div>
            </div>
            <div className=" order-2 ">
              <img
                src={`${icon}`}
                alt="cloud icon"
                className="bg-[#eca88e] rounded-full"
              />
            </div>
          </div>
          <div className="flex text-slate-50">
            <div className="from-fuchsia-700 to-orange-500 bg-gradient-to-b px-5 py-2 my-5 order-1 flex-1 rounded-lg">
              <div className="flex justify-center text-sm pt-2">
                CURRENT TEMPERATURE
              </div>{' '}
              <div className="flex justify-center">
                {temp} {defaultTempUnit}
              </div>
            </div>
            <div className="from-fuchsia-700 to-orange-500 bg-gradient-to-b px-5 py-1 my-5 mx-2 order-2 flex-1 rounded-lg">
              <div className="flex justify-center text-xs pt-5">
                MAXIMUM TEMPERATURE{' '}
              </div>
              <div className="flex justify-center">
                {temp_max} {defaultTempUnit}
              </div>
            </div>
            <div className="from-fuchsia-700 to-orange-500 bg-gradient-to-b px-5 py-1 my-5 order-3 flex-1 rounded-lg">
              <div className="flex justify-center text-xs pt-5">
                MINIMUM TEMPERATURE{' '}
              </div>
              <div className="flex justify-center">
                {temp_min} {defaultTempUnit}
              </div>
            </div>
          </div>
          <div className="flex text-slate-50">
            <div className=" from-fuchsia-900 to-pink-600 bg-gradient-to-r px-5 py-5 my-5 flex-1 rounded-lg">
              <div className="flex justify-center">WIND SPEED</div>
              <div className="flex justify-center">{wind_speed} meter/sec</div>
            </div>
            <div className="from-fuchsia-900 to-pink-600 bg-gradient-to-r px-5 py-5 my-5 ml-2 flex-1 rounded-lg">
              <div className="flex justify-center">WIND DIRECTION</div>{' '}
              <div className="flex justify-center">
                {wind_direction} degrees
              </div>
            </div>
          </div>
          <div className="flex text-slate-50">
            <div className="from-blue-400 to-indigo-500 bg-gradient-to-r w-full px-5 py-5 my-5 flex-1 rounded-lg">
              <div className="flex justify-center">PRESSURE</div>{' '}
              <div className="flex justify-center">{pressure} hPa</div>
            </div>
            <div className=" from-blue-400 to-indigo-500 bg-gradient-to-r w-full block px-5 py-5 my-5 ml-2 flex-1 rounded-lg">
              <div className="flex justify-center">HUMIDITY</div>{' '}
              <div className="flex justify-center">{humidity} %</div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};
WeatherReport.propTypes = {
  weatherReport: PropTypes.shape({
    location: PropTypes.string,
    temp: PropTypes.number,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    feelsLike: PropTypes.number,
    windSpeed: PropTypes.number,
    windDirection: PropTypes.string,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
  }),
  reportStatus: PropTypes.shape({
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
    type: PropTypes.oneOf(['GET_WEATHER']),
    payload: PropTypes.objectOf(Error),
  }),
  defaultTempUnit: PropTypes.string,
};
WeatherReport.defaultProps = {
  weatherReport: undefined,
  reportStatus: undefined,
  defaultTempUnit: 'celsius',
};
export default memo(WeatherReport);
