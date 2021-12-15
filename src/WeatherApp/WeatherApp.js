import React, {Component} from "react";

import Form from "./Form";
import Weather from "./Weather";
import $ from 'jquery';
import Regenerator from 'regenerator-runtime/runtime';

const OPENWEATHER_API_KEY = "72114edd843a36c9018d8d495674b088";

class WeatherApp extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e)  =>  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    var dataWeather = null;
    const api_call = await $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`, function(data, status){
        console.log(data);
        dataWeather = data;
    });
    if (dataWeather != null) {
      this.setState({
        temperature: dataWeather.main.temp,
        city: dataWeather.name,
        country: dataWeather.sys.country,
        humidity: dataWeather.main.humidity,
        description: dataWeather.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Sorry, could not fetch weather"
      });
    }
  }
  render() {
    return (
      <div>
        <div>
            <h1>Weather App</h1>
        </div>
        <div>
          <Form getWeather={this.getWeather} />
          <Weather 
            temperature={this.state.temperature} 
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
          />
        </div>
      </div>
    );
  }
};

export default WeatherApp;