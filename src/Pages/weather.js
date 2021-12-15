import React, { Component, createRef } from 'react';

export default class Weather extends Component {
  state = {
    weatherList: [
      {
        id: 1,
        cityname: 'Delhi',
        temp: 30,
      },
      {
        id: 2,
        cityname: 'Bombay',
        temp: 40,
      },
      {
        id: 3,
        cityname: 'Chennai',
        temp: 46,
      },
    ],
    showData: 'Please enter the City name to check the weather',
  };

  inputRef = createRef();

  showWeather = (event) => {
    event.preventDefault();
    let resultText = '';
    const cityName = this.inputRef.current.value;
    if (cityName === '') {
      this.setState({ showData: 'Please enter the City name to check the weather' });
      return;
    }
    const { weatherList } = this.state;
    const findCity = weatherList.find(({ cityname }) => cityname === cityName);
    if (findCity) {
      resultText = `The current temparature of ${findCity.cityname} is ${findCity.temp} degree`;
    } else {
      resultText = `The weather data is unavailable for ${cityName} `;
    }
    this.setState({ showData: resultText });
    () => {
      this.inputRef.current.value = '';
    };
  };

  render() {
    const { showData } = this.state;
    return (
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={this.showWeather}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Check Weather</button>
        </form>
        <div>{showData}</div>
      </div>
    );
  }
}
