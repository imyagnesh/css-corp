import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class WeatherReport extends Component {
  state = {
    weatherList: [{city: 'chennai', celcius: 30},{city : 'vellore' , celcius : 45},{city : 'cuddalore' , celcius : 25}],
    selectedCity : '',
  };

  inputRef = createRef();

  checkWeather = (event) => {
    event.preventDefault();
    const city = this.inputRef.current.value;
    console.log("city : "+ city);

     this.setState({
      selectedCity : city,
    });
  };

  
  render() {
    console.log('render');
    const { weatherList,selectedCity } = this.state;
    var result = weatherList.filter((x) => x.city === selectedCity);
    var cityWeather = (selectedCity!='') ? <div className="flex justify-center">Entered City is Not found</div> : '';

    if (result.length > 0) {
        cityWeather = weatherList
            .filter((x) => x.city === selectedCity)
            .map((item) => (
              //  console.log(item);
              <div className="flex justify-center" key={item.city}> {item.city } : {item.celcius}</div>
            ))}

    return (
      <div className="container">
        <h1 className="text-4xl text-center my-4 font-bold text-red-400">Weather Report App</h1>
        <form onSubmit={this.checkWeather} className="flex justify-center my-4">
          <input type="text" className="border" ref={this.inputRef}/>
          <button type="submit" className="btn-primary">Get Weather</button>
        </form>
        <div className="todo-list">
        {cityWeather}
        </div>
        </div>
    )
  }
}