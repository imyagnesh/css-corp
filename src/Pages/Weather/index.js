import React, { Component, createRef } from 'react';

export default class Weather extends Component {
  state = {
    weatherObj: [
      { id: 1, city: 'Chennai', temp: 35 },
      { id: 2, city: 'Mumbai', temp: 30 },
      { id: 3, city: 'Bangalore', temp: 27 },
      { id: 4, city: 'Kolkata', temp: 33 },
    ],
    cityWeather: '',
  };

  inputRef = createRef();

  getWeather = (event) => {
    event.preventDefault();
    // const todoText = document.getElementById('todoText').value;
    // const { weatherObj } = this.state;
    const cityName = this.inputRef.current.value;
    console.log(cityName);

    this.setState(
      // cityName = '',
      // console.log(cityName),
      ({ weatherObj }) => {
        // cityWeather: weatherObj.map((x) => {
        //   console.log(x.city.toUpperCase === cityName.toUpperCase);
        //   console.log(x);
        //   if (x.city.toUpperCase === cityName.toUpperCase) {
        //     cityWeather.push(x);
        //     // console.log(cityWeather);
        //   }
        // }),
        const a = weatherObj.find(
          (i) => i.city.toUpperCase === cityName.toUpperCase,
        );

        return {
          cityWeather: a ? `${a.city} temp is ${a.temp}` : 'City not found',
        };
      },
      () => {
        // cityName = '';
        this.inputRef.current.value = '';
      },
    );
  };

  render() {
    const { cityWeather } = this.state;
    console.log('render', cityWeather);
    // if (cityWeather.id) {
    // }
    return (
      <div>
        <div className="flex align-center">
          <h1>Weather Report</h1>
          <form onSubmit={this.getWeather}>
            <input type="text" ref={this.inputRef} />
            <button type="submit">Submit</button>
          </form>
          <div className="report">
            <p>{cityWeather}</p>
          </div>
        </div>
      </div>
    );
  }
}
