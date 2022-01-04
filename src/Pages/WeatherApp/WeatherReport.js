import React, { memo } from "react";
import PropTypes from 'prop-types';
import { OPENWEATHER_CELCIUS_VALUE, NO_WEATHER_REPORT_ERROR } from '../../../.env';

const WeatherReport = (props) => {
    const { temperature, minTemp, maxTemp, windSpeed, windDirection, pressure, feelsLike, city, humidity, description, units, hasErrorInWeatherFetch } = props;
    if (hasErrorInWeatherFetch) {
        return <p className="text-red-600 font-bold">{NO_WEATHER_REPORT_ERROR}</p>;
    }
    else {
        return (
            <div className="bg-white p-1">
                {
                    city &&
                    <div className="grid grid-cols-3">
                        <div className="my-3 p-2 col-span-2">
                            <h3 className="text-2xl font-bold tracking-wide">{city}</h3>
                            <div className=" text-slate-500 font-bold text-xs">
                                <span>{description}</span> | Feels like <span>{feelsLike} &deg;{units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    temperature &&
                    <div>
                        <div className="grid grid-cols-3 my-1 space-y-1.5 space-x-9">
                            <div className="h-24 text-white  p-2 text-center rounded bg-orange-300"> Current Temperature <br /> {temperature} &deg;{units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</div>
                            <div className="h-24 text-white  p-2 text-center rounded bg-orange-300"> Maximum Temperature <br /> {maxTemp} &deg;{units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</div>
                            <div className="h-24 text-white p-2  text-center rounded bg-orange-300"> Minimum Temperature <br /> {minTemp} &deg;{units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div className="grid grid-cols-3 my-1 space-y-1.5 space-x-9">
                            <div className="h-24 text-white  p-2 text-center rounded bg-green-200"> Wind Speed <br /> {windSpeed} meter/sec</div>
                            <div className="h-24 text-white  p-2 text-center rounded bg-green-200"> Wind Direction <br /> {windDirection} degrees</div>
                        </div></div>
                }
                {
                    pressure && <div>
                        <div className="grid grid-cols-3 my-1 space-y-1.5 space-x-9">
                            <div className="h-24 text-white  p-2 text-center rounded bg-sky-300"> Pressure <br /> {pressure} hpa</div>
                            <div className="h-24 text-white  p-2 text-center rounded bg-sky-300"> Humidity <br /> {humidity}%</div>
                        </div></div>
                }
            </div>
        );
    }
};

WeatherReport.propTypes = {
    city: PropTypes.string,
    units: PropTypes.string,
    hasErrorInWeatherFetch: PropTypes.bool.isRequired,
};

export default memo(WeatherReport);