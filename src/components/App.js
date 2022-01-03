import React, { Component, createContext, createRef } from 'react';
import _ from 'lodash';
import Input from './Input';
import SearchResults from './SearchResults';
import SetUnits from './SetUnits';
import WeatherReports from './WeatherReports';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      description: '',
      currentTemp: '',
      maxTemp: '',
      minTemp: '',
      windDct: '',
      units: 'F',
      changeUnit: 'farenheit',
      windSpeed: '',
      pressure: '',
      humidity: '',
      cities: [],
      name: [],
      cityNames: [
        'Chennai',
        'Chandigar',
        'Chicago',
        'Madurai',
        'Mumbai',
        'Bangalore',
        'Baroda',
        'Kashmir',
      ],
    };
    this.inputRef = createRef();
  }

  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=333458e05b25c5e69a7c22d64b7bc47f&units=imperial',
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          city: json.name,
          description: json.weather[0].description,
          currentTemp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windDct: json.wind.deg,
        });
      });
  }

  searchCities = (item) => {
    const currentCity = 'chennai';
    console.log(currentCity);

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?appid=333458e05b25c5e69a7c22d64b7bc47f&units=imperial&q=${item}`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          cities: [json],
          city: json.name,
          description: json.weather[0].description,
          currentTemp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windDct: json.wind.deg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getWeatherResults = (event) => {
    const currentCity = event.target.value;
    this.setState(({ cityNames }) => {
      const location = cityNames.filter((item) =>
        item.toLowerCase().startsWith(currentCity.toLowerCase()),
      );
      return {
        name: location,
      };
    });
  };

  getWeatherResults = _.debounce(this.getWeatherResults, 500);

  changeUnits = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ changeUnit: value });
    if (value === 'celcius') {
      console.log(value);
      this.setState(({ maxTemp, minTemp, currentTemp }) => {
        const max = Math.round(((maxTemp - 32) * 5) / 9);
        const min = Math.round(((minTemp - 32) * 5) / 9);
        const current = Math.round(((currentTemp - 32) * 5) / 9);
        return {
          maxTemp: max,
          minTemp: min,
          currentTemp: current,
          units: 'C',
        };
      });
    } else {
      this.setState(({ maxTemp, minTemp, currentTemp }) => {
        const max = Math.round(maxTemp * (9 / 5) + 32);
        const min = Math.round(minTemp * (9 / 5) + 32);
        const current = Math.round(currentTemp * (9 / 5) + 32);
        return {
          maxTemp: max,
          minTemp: min,
          currentTemp: current,
          units: 'F',
        };
      });
    }
  };

  render() {
    const {
      city,
      description,
      currentTemp,
      units,
      windSpeed,
      maxTemp,
      minTemp,
      windDct,
      pressure,
      humidity,
      cities,
      name,
      changeUnit,
    } = this.state;

    console.log(name);

    return (
      <div className="w-3/5 ml-48 shadow-2xl border-8 border-solid">
        <div className="flex flex-col border-0 border-b-2">
          <h1 className="border-b-2 border-red-500 w-full text-lg font-bold">
            WeatherWatch
          </h1>
        </div>
        <Input ref={this.inputRef} getWeatherResults={this.getWeatherResults} />
        <SetUnits changeUnits={this.changeUnits} currentUnit={changeUnit} />
        <WeatherReports
          city={city}
          description={description}
          units={units}
          currentTemp={currentTemp}
          windSpeed={windSpeed}
          maxTemp={maxTemp}
          minTemp={minTemp}
          windDct={windDct}
          pressure={pressure}
          humidity={humidity}
          cities={cities}
        />
        <SearchResults cities={name} searchCities={this.searchCities} />
      </div>
    );
  }
}
