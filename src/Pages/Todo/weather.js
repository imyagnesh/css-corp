import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class Weather extends Component {
  state = {
    cityDetails: [
      { id: 1, city: 'Chennai', temp: '40' },
      { id: 2, city: 'Coimbatore', temp: '35' },
      { id: 3, city: 'Trichy', temp: '41' },
      { id: 4, city: 'Erode', temp: '39' },
      { id: 5, city: 'Karur', temp: '34' },
      { id: 6, city: 'Ooty', temp: '18' },
      { id: 7, city: 'Kodaikanal', temp: '20' },
    ],
    result: '',
  };

  inputRef = createRef();

  checkWeather = (event) => {
    event.preventDefault();
    const inputLocation = this.inputRef.current.value;
    this.setState(({ cityDetails }) => {
      const locationExist = cityDetails.find((x) => x.city === inputLocation);
      return {
        result: locationExist ? `The city temperature of ${locationExist.city}  is ${locationExist.temp} degree celcius` : 'City data does not exist in Records',
      };
    });
  };

  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.checkWeather}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Click to know weather</button>
        </form>
        <h2>
          {
            result
          }
        </h2>
      </div>
    );
  }
}
