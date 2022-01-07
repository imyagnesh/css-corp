import React, { memo } from "react";
import PropType from 'prop-types';
import { OPEN_CELCIUS_VALUE, NO_WEATHER_REPORT_ERROR } from './constants';

const WeatherReport = (props) => {
    const { temperature, minTemp, maxTemp, windSpeed, windDirection, pressure, feelsLike, city, humidity, description, icon, units, hasErrorInWeather } = props;
    if (hasErrorInWeather) {
        return <div className="error-panel text-red-600 font-bold">{NO_WEATHER_REPORT_ERROR}</div>;
    }
    else {
        return (
            <div className="bg-white p-1">
                {
                    city &&
                    <div className="grid grid-cols-3 gap-2">
                        <div className="my-3 p-2 col-span-2">
                            <h3 className="text-2xl font-bold tracking-wide">{city}</h3>
                            <div className="uppercase text-slate-500 font-bold text-xs">
                                <span>{description}</span> | Feels like <span>{feelsLike} &deg;{units == OPEN_CELCIUS_VALUE ? "C" : "F"}</span>
                            </div>
                        </div>
                        <div>
                            <img src={icon} />
                        </div>
                    </div>
                }
                {
                    temperature &&
                    <div>
                        <div className="grid grid-cols-3 gap-2 my-1">
                            <div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-red-500 to-pink-500"> Current Temperature <br /> {temperature} &deg;{units == OPEN_CELCIUS_VALUE ? "C" : "F"}</div>
                            <div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-red-500 to-pink-500"> Maximum Temperature <br /> {maxTemp} &deg;{units == OPEN_CELCIUS_VALUE ? "C" : "F"}</div>
                            <div className="h-24 text-white p-2 uppercase text-center rounded bg-gradient-to-r from-red-500 to-pink-500"> Minimum Temperature <br /> {minTemp} &deg;{units == OPEN_CELCIUS_VALUE ? "C" : "F"}</div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div className="grid grid-cols-2 my-1 gap-2">
                            <div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-indigo-500 to-pink-500"> Wind Speed <br /> {windSpeed} meter/sec</div>
                            <div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-indigo-500 to-pink-500"> Wind Direction <br /> {windDirection} degrees</div>
                        </div></div>
                }
                {
                    pressure && <div>
                        <div className="grid grid-cols-2 my-1 gap-2">
                            <div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-green-400 to-blue-500"> Pressure <br /> {pressure} hpa</div>
                            <div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-green-400 to-blue-500"> Humidity <br /> {humidity}%</div>
                        </div></div>
                }
            </div>
        );
    }
};

WeatherReport.PropType = {
    city: PropType.string,
    units: PropType.string,
    hasErrorInWeather: PropType.bool.isRequired,
};

export default memo(WeatherReport); 