import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class weatherResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Hyderabad',
      place: '',
      condition: '',
      temp: '',
      temp_max: '',
      temp_min: '',
      wind_speed: '',
      wind_direction: '',
      pressure: '',
      humidity: '',
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  changeValue = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  getWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=imperial&appid=333458e05b25c5e69a7c22d64b7bc47f`
    )
      .then((response) => response.json())
      .then((city) => {
        this.setState({
          place: city.name,
          condition: city.weather[0].description,
          temp: city.main.temp,
          temp_max: city.main.temp_max,
          temp_min: city.main.temp_min,
          wind_speed: city.wind.speed,
          wind_direction: city.wind.deg,
          pressure: city.main.pressure,
          humidity: city.main.humidity,
        });
      });
  };

  render() {
    const { place, condition, temp, temp_max, temp_min, wind_speed, wind_direction, pressure, humidity } = this.state;
    return (
      <div className="weather-result">
        <div className="my-2 flex">
            <div className="weather-search">
                <h3 className="heading">Location</h3>
                <div className="flex">
                    <input className="input-search" onChange={this.changeValue} type="text" value={this.state.location}/>
                    <button className="search-button" onClick={this.getWeather}>Search</button>
                </div>
            </div>
            <div className="weather-select-unit">
                <h3 className="heading">Units</h3>
                <select className="h-8 text-xs px-0 w-full focus:outline-none">
                    <option value="celcius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select>
            </div>

        </div>

        <div className="bg-white border rounded-md">
            <div className="relative mt-3 mb-2 p-5 flex flex-row flex-wrap justify-items-center">
                <div className="w-5/6">
                    <h1 className="city-title text-3xl">{place}</h1>
                    <div className="city-description font-xs">{condition}</div>
                </div>
                <div className="weather-img w-1/8 h-1/6"><img src="http://openweathermap.org/img/wn/04n@2x.png" className="w-full"/></div>
            </div>
            <div className="weather-report relative">
                <div className="weather-content">
                    <div className="weather-temp flex">
                        <div className="weather-temp-content mr-2">
                            <div className="flex flex-col">
                                <div className="mb-2">Current Temparature</div>
                                <div className="text-lg">{temp} <span>&#8451;</span></div>
                            </div>
                        </div>
                        <div className="weather-temp-content mr-2">
                            <div className="flex flex-col">
                                <div className="mb-2">Maximum Temparature</div>
                                <div className="text-lg">{temp_max} <span>&#8451;</span></div>
                            </div>
                        </div>
                        <div className="weather-temp-content">
                            <div className="flex flex-col">
                                <div className="mb-2">Minimum Temparature</div>
                                <div className="text-lg">{temp_min} <span>&#8451;</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-wind flex mt-3">
                        <div className="weather-wind-content mr-2">
                            <div className="flex flex-col">
                                <div className="mb-2">Wind Speed</div>
                                <div className="text-lg">{wind_speed} <span className="lowercase">meter/sec</span></div>
                            </div>
                        </div>
                        <div className="weather-wind-content">
                            <div className="flex flex-col">
                                <div className="mb-2">Wind Direction</div>
                                <div className="text-lg">{wind_direction} <span className="lowercase">degrees</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-pressure flex my-3">
                        <div className="weather-pressure-content mr-2">
                            <div className="flex flex-col">
                                <div className="mb-2">Pressure</div>
                                <div className="text-lg">{pressure} <span className="lowercase">hPa</span></div>
                            </div>
                        </div>
                        <div className="weather-pressure-content">
                            <div className="flex flex-col">
                                <div className="mb-2">Humidity</div>
                                <div className="text-lg">{humidity}<span className="text-md">%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
