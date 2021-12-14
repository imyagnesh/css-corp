import React, { Component, createRef } from 'react';
import './weatherStyle.css';

export default class Weather extends Component {
  state = {
    location: [
      {
        id: 1,
        city: 'chennai',
        temp: 32,
      },
      {
        id: 2,
        city: 'bangalore',
        temp: 25,
      },
      {
        id: 3,
        city: 'delhi',
        temp: 30,
      },
    ],
    showWeather: '',
  };

  // eslint-disable-next-line react/sort-comp
  getWeather = (e) => {
    e.preventDefault();
    const { location, showWeather } = this.state;
    const locationName = this.inputRef.current.value;
    console.log(locationName);

    // eslint-disable-next-line max-len
    this.setState(
      ({ showWeather }) => ({
        showWeather: location.filter((place) => place.city === locationName),
      }),
      () => {
        this.inputRef.current.value = '';
      },
    );
    console.log(showWeather);
  };

  inputRef = createRef();

  render() {
    const { location, showWeather } = this.state;

    return (
      <div>
        <h1> Weather Forecast </h1>
        <form onSubmit={this.getWeather}>
          <input type="text" id="locationName" ref={this.inputRef} />
          <button type="submit">What's the Weather?</button>
        </form>
        <div className="show-weather">
          {showWeather ? (
            <div key={showWeather[0].id}>
              Weather of
              {showWeather[0].city} = {showWeather[0].temp}
            </div>
          ) : (
            <div className="weather-not-found">Sorry! Weather not found </div>
          )}
        </div>
      </div>
    );
  }
}
