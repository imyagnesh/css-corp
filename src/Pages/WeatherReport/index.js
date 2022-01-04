/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { createRef, PureComponent } from 'react';
import SearchCity from './searchCity';
import SuggestedCities from './suggestedCities';
import './root.css';

export default class WeatherReport extends PureComponent {
  state = {
    temp: '',
    minTemp: '',
    maxTemp: '',
    pressure: '',
    humidity: '',
    wind: '',
    windDeg: '',
    feelsLike: '',
    icon: '',
    selectedCity: 'bangalore',
    selectedUnit: 'imperial',
    allCities: [],
    citySuggestionList: [],
  };

  inputRef = createRef();

  componentDidMount() {
    const city = this.state.selectedCity;
    const unit = this.state.selectedUnit;
    // console.log(city);
    this.getAvailableCities();
    this.cityWeatherReport(city, unit);
  }

  getSuggestedCities = () => {
    const inputCity = this.inputRef.current.value;
    const cities = this.state.allCities;
    // console.log(cities.filter((item) =>/^`inputCity`/i.test(item.name)));
    this.setState({
      citySuggestionList: (inputCity !== '') ? cities.filter((item) => item.name.startsWith(inputCity)) : [],
    });
  };

  getAvailableCities = async () => {
    try {
      const res = await fetch('https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/cities');
      const json = await res.json();
      this.setState({
        allCities: json,
      });
    } catch (error) {
      console.log('Error');
    }
  };

  changeUnit = (e) => {
    const unit = e.target.value;

    this.setState({
      selectedUnit: unit,
    });
    const city = this.state.selectedCity;
    this.cityWeatherReport(city, unit);
  };

  getCityReport = (location) => {
    this.setState({
      selectedCity: location,
    });
    const unit = this.state.selectedUnit;
    this.cityWeatherReport(location, unit);
  };

  cityWeatherReport = async (city, unit) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=333458e05b25c5e69a7c22d64b7bc47f`;

      const res = await fetch(apiUrl);
      const json = await res.json();
      const unitSymbol = (unit === 'metric') ? '\u00b0C' : '\u00b0F';
      this.setState({
        temp: json.main.temp + unitSymbol,
        minTemp: json.main.temp_min + unitSymbol,
        maxTemp: json.main.temp_max + unitSymbol,
        pressure: json.main.pressure,
        humidity: json.main.humidity,
        wind: json.wind.speed,
        windDeg: json.wind.deg,
        feelsLike: `FEELS LIKE ${json.main.feels_like}`,
        icon: `http://openweathermap.org/img/w/${json.weather[0].icon}.png`,
        desc: json.weather[0].description,
        selectedCity: city,
      });
    } catch (error) {
      console.log('errr');
      // errorStatus({ type, payload: error });
    }
  };

  render() {
    const {
      temp, minTemp, maxTemp, pressure, humidity, wind, windDeg,
      feelsLike, icon, desc, selectedCity,
    } = this.state;
    const suggestedCities = this.state.citySuggestionList;

    return (
      <div className="weather-container">
        <div className="weather-title">WeatherWatch</div>
        <SearchCity
          getSuggestedCities={this.getSuggestedCities}
          changeUnit={this.changeUnit}
          selectedUnit={this.state.selectedUnit}
          ref={this.inputRef}
        />
        <SuggestedCities cities={suggestedCities} getCityReport={this.getCityReport} />
        <div className="selected-city-container">
          <div className="selected-city-weather-desc">
            <div className="selected-city-name">{selectedCity}</div>
            <div className="selected-city-desc">
              {desc}
              |
              {feelsLike}
            </div>
          </div>
          <div className="weather-icon-container"><img src={icon} alt="weather-icon" className="weather-icon" /></div>
        </div>
        <div className="location-weather-report">
          <div className="location-weather-report-container">
            <div className="location-weather-report-details">
              <div className="location-weather-report-label">Minimum Temperature</div>
              <div>{minTemp}</div>
            </div>
            <div className="location-weather-report-details">
              <div className="location-weather-report-label">Miximum Temperature</div>
              <div>
                {maxTemp}
              </div>
            </div>
            <div className="location-weather-report-details">
              <div className="location-weather-report-label">Temperature</div>
              <div>{temp}</div>
            </div>
          </div>

          <div className="location-weather-report-container">
            <div className="location-wind-report">
              <div className="location-weather-report-label">Wind</div>
              <div className="text-center">
                {wind}
              </div>
            </div>
            <div className="location-wind-report">
              <div className="location-weather-report-label">WindDeg</div>
              <div className="text-center">
                {windDeg}
              </div>
            </div>
          </div>
          <div className="location-weather-report-container">
            <div className="location-pressure-report">
              <div className="location-weather-report-label">Pressure</div>
              <div>
                {pressure}
              </div>
            </div>
            <div className="location-pressure-report">
              <div className="location-weather-report-label">humidity</div>
              <div>
                {humidity}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
