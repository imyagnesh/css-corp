import React, { memo } from "react";
import PropTypes from 'prop-types';
import { OPENWEATHER_CELCIUS_VALUE } from '../common/constants';

const WeatherReport = (props) => {
	const { temperature, minTemp, maxTemp, windSpeed, windDirection, pressure, feelsLike, city, country, humidity, description, icon, units, error } = props;
	return (
		<div className="bg-white p-1">
		{	
			city && country && 
			<div className="grid grid-cols-3">
				<div className="my-3 p-2 col-span-2">	
					<h3 className="text-2xl font-bold tracking-wide">{ city }</h3>
					<div className="uppercase text-slate-500 font-bold text-xs">
						<span>{ description }</span> | Feels like <span>{ feelsLike } &deg;{units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</span>
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
				<div className="grid grid-cols-3 my-1 space-y-1.5 space-x-9">
					<div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-red-500 to-pink-500"> Current Temperature <br/> {temperature} &deg;{units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</div>
					<div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-red-500 to-pink-500"> Maximum Temperature <br/> { maxTemp} &deg;{ units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</div>
					<div className="h-24 text-white p-2 uppercase text-center rounded bg-gradient-to-r from-red-500 to-pink-500"> Minimum Temperature <br/> { minTemp} &deg;{ units == OPENWEATHER_CELCIUS_VALUE ? "C" : "F"}</div>
				</div>
			</div>
		}
		{ 	
			 windSpeed && <div> 
				<div className="grid grid-cols-3 my-1 space-y-1.5 space-x-9">
					<div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-indigo-500 to-pink-500"> Wind Speed <br/> { windSpeed} meter/sec</div>
					<div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-indigo-500 to-pink-500"> Wind Direction <br/> { windDirection} degrees</div>
				</div></div>
		}
		{ 	
			 pressure && <div>
				<div className="grid grid-cols-3 my-1 space-y-1.5 space-x-9">
					<div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-green-400 to-blue-500"> Pressure <br/> { pressure} hpa</div>
					<div className="h-24 text-white uppercase p-2 text-center rounded bg-gradient-to-r from-green-400 to-blue-500"> Humidity <br/> { humidity}%</div>
				</div></div>
		}
		{ 
			 error && <p className="text-red-600 font-bold">{  error }</p>  
		}
		</div>
	);
};

WeatherReport.propTypes = {
	temperature: PropTypes.number,
	minTemp: PropTypes.number,
	maxTemp: PropTypes.number,
	windSpeed: PropTypes.number,
	windDirection: PropTypes.number,
	pressure: PropTypes.number,
	feelsLike: PropTypes.number,
	city: PropTypes.string,
	country: PropTypes.string,
	humidity: PropTypes.number,
	description: PropTypes.string,
	units: PropTypes.string,
	icon: PropTypes.string,
	error: PropTypes.string,
};

export default memo(WeatherReport);