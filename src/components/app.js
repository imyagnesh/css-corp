import React, { Component } from 'react';
import axios from 'axios';
import City from './SearchResults';
import Weather from './Weather';
import WeatherReport from './WeatherReport';

class App extends React.Component {

  state = { weatherResult: null, searchtemperature: null }

  SearchResults = async (searchInputValue, searchtemperature) => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=imperial&appid=333458e05b25c5e69a7c22d64b7bc47f`)
    this.setState({ weatherResult: response.data })
  }

  render() {
    return (
      <div className="weather_container bg-gray-100 p-3">
        
          <City onSearchSubmit={this.SearchResults} />
          {this.state.weatherResult ? <Weather weatherResult={this.state.weatherResult} searchtemperature={this.state.searchtemperature} /> : <div></div>}
       
      </div>
    )
  }

}

export default App; 