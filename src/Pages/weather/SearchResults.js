import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/setting';

const Searchresult = ({ result }) => {
   
  const name = result.name ? result.name : 'Bengaluru';
  const tmpData = result.main ? result.main.temp : '29';
  const tempmin = result.main ? result.main.temp_min : '29';
  const tempmax = result.main ? result.main.temp_max : '28';
  const pressure = result.main ? result.main.pressure : '1016';
  const humidity = result.main ? result.main.humidity : '54';
  const feels = result.main ? result.main.feels_like : '30';
  const base = result.base ? result.base : 'scattered cloud';
  const windSpeed = result.wind ? result.wind.speed : '3.1';
  const windDirection = result.wind ? result.wind.deg : '220';


  return (
    <div className="bg-white mt-2 ml-4 mr-5">
      <div className="flex">
        <div className="w-10/12">
          <h1 className="text-4xl font-bold font-mono px-5 pt-3">{name}</h1>
          <span className="text-xs text-grey font-mono px-5 pt-3 uppercase">
            {base}|{Context.feelslike} {feels}&deg;{Context.celsius}
          </span>
        </div>
        <div className='"w-2/12'>
          <img src="./asstes/logo.png" alt="weather"></img>
        </div>
      </div>

      <div className="mt-2 ml-4 mr-5">
        <div className="flex">
          <div className="w-4/12 h-20 bg-gradient-to-b from-purple-400 to-red-500 border rounded">
            <h2 className="text- text-white text-center p-2 tracking-widest uppercase">
              {Context.temperature.current}
            </h2>
            <span className="text-white text-center block">{tmpData}&deg;{Context.celsius}</span>
          </div>
          <div className="w-4/12 h-20 bg-gradient-to-b from-purple-400 to-red-500 border rounded">
            <h2 className="text-white text-center p-2 tracking-widest uppercase">
            {Context.temperature.maximum}
            </h2>
            <span className="text-white text-center block ">{tempmax}&deg;{Context.celsius}</span>
          </div>
          <div className="w-4/12 h-20 bg-gradient-to-b from-purple-400 to-red-500 border rounded">
            <h2 className="text-white text-center p-2 tracking-widest uppercase">
            {Context.temperature.minimum}
            </h2>
            <span className="text-white text-center block">{tempmin}&deg;{Context.celsius}</span>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-4 mr-5">
        <div className="flex">
          <div className="w-6/12 h-20 bg-gradient-to-r from-purple-600 to-red-300 border rounded">
            <h2 className="text-white text-center p-2 tracking-widest uppercase">
            {Context.wind.speed}
            </h2>
            <span className="text-white text-center block">
              {pressure} {Context.meter}
            </span>
          </div>
          <div className="w-6/12 h-20 bg-gradient-to-r from-purple-600 to-red-300 border rounded">
            <h2 className="text-white text-center p-2 tracking-widest uppercase">
            {Context.wind.direction}
            </h2>
            <span className="text-white text-center block">
              {humidity} {Context.degrees}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-4 mr-5">
        <div className="flex">
          <div className="w-6/12 h-20 bg-gradient-to-l from-blue-800 to-blue-200 border rounded mb-4">
            <h2 className="text-white text-center p-2 tracking-widest uppercase">
              {Context.pressure}
            </h2>
            <span className="text-white text-center block ">
              {windSpeed} {Context.hpa}
            </span>
          </div>
          <div className="w-6/12 h-20 bg-gradient-to-r from-blue-700 to-blue-200 border rounded mb-4">
            <h2 className="text-white text-center p-2 tracking-widest uppercase">
              {Context.humidity}
            </h2>
            <span className="text-white text-center block ">
              {windDirection} %
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Searchresult.propTypes = {
    name: PropTypes.string,
    tmpData: PropTypes.string,
    tempmin: PropTypes.string,
    tempmax: PropTypes.string,
    pressure: PropTypes.string,
    humidity: PropTypes.string,
    windSpeed: PropTypes.string,
    windDirection: PropTypes.string,  
  };
export default Searchresult;