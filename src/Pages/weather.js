import React, { Component, createRef } from 'react';
//import './todoStyle.css';

export default class Weather extends Component {
  state = {
    weather: [
        { id: 1, city: 'Hyderabad', temp: '20' },
        { id: 2, city: 'Bangalore', temp: '15' },
        { id: 3, city: 'Adoni', temp: '10' },
        { id: 4, city: 'Kurnool', temp: '22' },
    ],
    weatherInfo: '',
  };

  inputRef = createRef();

  weatherData = (event) => {
    event.preventDefault();
    const cityData = this.inputRef.current.value;
    console.log(cityData);
    this.setState(
        ({ weather }) => {
        const weatherData = weather.find((cityName) => cityName.city === cityData);
        return { weatherInfo: weatherData ? `${weatherData.city} temp is ${weatherData.temp}` : `weather Info is not available`,};
        },
        () => {
            this.inputRef.current.value = '';
        },
    );
  };  
  render() {
    const { weatherInfo } = this.state;
    return (
      <div className="container">
        <h1>Weather DashBoard</h1>
        <form onSubmit={this.weatherData}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Find the Weather</button>
        </form>
        {weatherInfo}
      </div>
    );
  }
}