import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class WeatherReport extends Component {
  state = {
    weatherList: [{city: 'chennai', celcius: 30},{city : 'banglore' , celcius : 45}],
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
    //console.log('select : ' +selectedCity);
    var result = weatherList.filter((x) => x.city === selectedCity);
    var cityWeather = (selectedCity!='') ? <div>Not found</div> : '';
    
    if (result.length > 0) {
        cityWeather = weatherList
            .filter((x) => x.city === selectedCity)
            .map((item) => (
              //  console.log(item);
              <div className="cityWeather" key={item.city}> {item.city } : {item.celcius}</div>
            ))}
    
    return (
      <div className="container">
        <h1>Weather Report App</h1>
        <form onSubmit={this.checkWeather}>
          <input type="text" ref={this.inputRef}/>
          <button type="submit">Check Weather</button>
        </form>
        <div className="todo-list">
        {cityWeather}
        </div>
        </div>
    )
  }
}